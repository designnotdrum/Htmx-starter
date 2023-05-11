// Respond with "hello from the other side" for requests to /ui/*
self.addEventListener("fetch", (event) => {
  console.log("worker fetch", event)
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/ui/")) {
    event.respondWith(new Response("hello from the other side"));
  }
});
