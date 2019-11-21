console.log('registered!')

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('airhorner').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/offline.html'
            ]);
        })
    )
});

self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
});

