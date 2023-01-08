self.addEventListener("install", (e) => {
  // console.log("install");
  e.waitUntil(
    caches.open("APP_KEY").then((cache) =>
      cache.addAll([
        "/",
        "src/index.tsx",
        "src/styles/Sass/App.scss",
        "index.html",
        // "src/assets/Sidebar",
        "src/assets",
      ])
    )
  );
});
self.addEventListener("activate", (e) => {
  console.log("activate");
});

self.addEventListener("fetch", (e) => {
  // e.respondWith(new Response("hacked by Mozz"));

  // e.respondWith(
  //   fetch(e.request).then(response => response)
  //   .error(error => new Response(error) )
  // )

  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response ? response : fetch(e.request);
    })
  );
});
