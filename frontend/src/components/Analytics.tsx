import Script from 'next/script';

/**
 * Google Analytics 4 loader. Only mounts when NEXT_PUBLIC_GA_ID is set,
 * so dev runs without it don't pollute the property with localhost traffic.
 *
 * NOTE on consent: this loads gtag.js unconditionally. For EU/UK traffic
 * you ultimately want Google Consent Mode v2 (default = denied → granted
 * after explicit consent). That's a follow-up task — not blocking launch,
 * but should land before serious EU traffic arrives.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
