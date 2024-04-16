self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('lorenzo-lomartire.github.io').then(function(cache) {
			console.log('Opened cache');
			return cache.addAll([
				'/',
				//'https://www.googletagmanager.com/gtm.js?id=GTM-TDK9KB9N',
				//'https://www.googletagmanager.com/gtag/js?id=G-GMTBSPBHXL',
				//'https://region1.google-analytics.com/g/collect?v=2&tid=G-GMTBSPBHXL&gtm=45je44f0v9173726675za200&_p=1713297017393&gcd=13l3l3l2l1&npa=1&dma_cps=sypham&dma=1&cid=1341572211.1713295019&ul=it-it&sr=1440x900&uaa=x86&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.216%7CGoogle%2520Chrome%3B120.0.6099.216&uamb=0&uam=&uap=macOS&uapv=11.7.3&uaw=0&are=1&pscdl=noapi&_s=3&sid=1713295019&sct=1&seg=1&dl=https%3A%2F%2Florenzo-lomartire.github.io%2F&dt=Lorenzo%20Lomartire&en=user_engagement&_et=6298&tfd=8332',
				//'https://region1.google-analytics.com/g/collect?v=2&tid=G-GMTBSPBHXL&gtm=45je44f0v9173726675za200&_p=1713297025705&gcd=13l3l3l2l1&npa=1&dma_cps=sypham&dma=1&cid=1341572211.1713295019&ul=it-it&sr=1440x900&uaa=x86&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.216%7CGoogle%2520Chrome%3B120.0.6099.216&uamb=0&uam=&uap=macOS&uapv=11.7.3&uaw=0&are=1&pscdl=noapi&_s=1&sid=1713295019&sct=1&seg=1&dl=https%3A%2F%2Florenzo-lomartire.github.io%2F&dt=Lorenzo%20Lomartire&en=page_view&_ee=1&tfd=93',
				//'https://region1.google-analytics.com/g/collect?v=2&tid=G-GMTBSPBHXL&gtm=45je44f0v9173726675za200&_p=1713297025705&gcd=13l3l3l2l1&npa=1&dma_cps=sypham&dma=1&cid=1341572211.1713295019&ul=it-it&sr=1440x900&uaa=x86&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.216%7CGoogle%2520Chrome%3B120.0.6099.216&uamb=0&uam=&uap=macOS&uapv=11.7.3&uaw=0&are=1&pscdl=noapi&_eu=AEA&_s=2&sid=1713295019&sct=1&seg=1&dl=https%3A%2F%2Florenzo-lomartire.github.io%2F&dt=Lorenzo%20Lomartire&en=scroll&epn.percent_scrolled=90&_et=4&tfd=5096',
				'/script.js',
				'/style.css',
				'/icons/main/icon.webp',
				'/icons/home.svg',
				'/icons/music.svg',
				'/icons/lang/en.svg',
				'/icons/lang/it.svg',
				'/icons/theme/dark.svg',
				'/icons/theme/light.svg',
				'/text/en.json',
				'/text/it.json',
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	if (event.request.url.indexOf('lorenzo-lomartire.github.io') == -1) {
		return;
	}
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response ? response : fetch(event.request);
		})
	);
});
