self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('lorenzo-lomartire.github.io').then(function(cache) {
			console.log('Opened cache');
			return cache.addAll([
				'/',
				'/script.js',
				'/style.css',
				'/icons/*',
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response ? response : fetch(event.request);
		})
	);
});
