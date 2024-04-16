self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('lorenzo-lomartire.github.io').then(function(cache) {
			return cache.addAll([
				'/'
			]);
		})
	);
});
