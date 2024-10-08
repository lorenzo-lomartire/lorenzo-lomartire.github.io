/*
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('lorenzo-lomartire.github.io').then(function(cache) {
			console.log('Opened cache');
			return cache.addAll([
				'/',
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
	if (event.request.url.indexOf('lorenzo-lomartire.github.io') === -1) {
		return;
	}
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response ? response : fetch(event.request);
		})
	);
});
*/