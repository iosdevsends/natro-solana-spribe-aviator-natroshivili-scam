import Script from 'next/script';

/**
 * Ahrefs Web Analytics — cookieless, privacy-friendly first-party traffic.
 * No cookies / no personal data, so it needs no consent gate (unlike GA below)
 * and loads independently of NEXT_PUBLIC_GA_ID. The data-key is public by
 * design (it ships in the page source), so a default is fine; override per
 * environment with NEXT_PUBLIC_AHREFS_ANALYTICS_KEY.
 */
const AHREFS_KEY =
  process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY || 'wDb7Taa+kqjvJxtrVl4uQQ';

/**
 * Google Analytics 4 + Consent Mode v2.
 *
 * Order matters:
 *   1. gtag-consent-default sets all storage to denied BEFORE gtag.js loads.
 *      Without this, the consent banner is decorative — GA fires anyway.
 *   2. gtag.js itself loads lazyOnload — *after* the page has fully loaded
 *      and the browser is idle. This keeps the 150KB+ gtag payload out of
 *      the LCP / TBT critical path. The trade-off is that page-view events
 *      fire a few seconds later than they would with afterInteractive — for
 *      a static case-file site this is acceptable.
 *   3. gtag-init schedules config (no data flows until consent is granted).
 *   4. ConsentBanner (client component) decides if it shows, and on accept
 *      calls gtag('consent','update', { analytics_storage: 'granted', ... }).
 *
 * No GA_ID = no scripts at all. Local-dev safe.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {AHREFS_KEY && (
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={AHREFS_KEY}
          // lazyOnload (not afterInteractive): the only third-party script
          // left in the render-adjacent window. analytics.js reads layout
          // geometry on load, which PageSpeed attributed to an 81 ms forced
          // reflow; deferring it to browser-idle keeps it off the FCP/LCP
          // path. A page-view that fires a few seconds late is fine here.
          strategy="lazyOnload"
        />
      )}

      {gaId && (
        <>
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });

          // Replay any persisted choice immediately on load so returning
          // visitors don't see the banner again and analytics is on.
          try {
            var persisted = localStorage.getItem('natro_consent_v1');
            if (persisted === 'granted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
        </>
      )}
    </>
  );
}
