const staticCinemaPWA = "cinema-pwa-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/avatar.jpg",
  "/images/harry.jpg",
  "/images/hobbit.jpg",
  "/images/iceage.jpg",
  "/images/jumanji.jpg",
  "/images/lotr.jpg",
  "/images/spiderman.jpg",
  "/images/starwars.jpg",
  "/images/toystory.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCinemaPWA).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})