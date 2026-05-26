import Script from 'next/script';

/**
 * Google Analytics 4 + Consent Mode v2.
 *
 * Order matters:
 *   1. gtag-consent-default sets all storage to denied BEFORE gtag.js loads.
 *      Without this, the consent banner is decorative — GA fires anyway.
 *   2. gtag-init schedules config (no data flows until consent is granted).
 *   3. gtag.js itself loads afterInteractive.
 *   4. ConsentBanner (client component) decides if it shows, and on accept
 *      calls gtag('consent','update', { analytics_storage: 'granted', ... }).
 *
 * No GA_ID = no scripts at all. Local-dev safe.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
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
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
