export const trackingConfig = {
  googleTagManagerId: "GTM-W3NQMMMX",
  googleAdsId: "AW-18186736179",
  whatsappConversionLabel: "wRVpCNrRu7McELOkjuBD"
};

export const whatsappConversionSendTo = `${trackingConfig.googleAdsId}/${trackingConfig.whatsappConversionLabel}`;

export const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${trackingConfig.googleTagManagerId}');`;

export const googleAdsConversionScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${trackingConfig.googleAdsId}');
window.trackWhatsApp = function() {
  gtag('event', 'conversion', {
    send_to: '${whatsappConversionSendTo}'
  });
};`;
