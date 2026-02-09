self.addEventListener("install", (event) => {
  console.log("Service Worker o'rnatilmoqda...");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker faollashdi.");
});

self.addEventListener("fetch", (event) => {
  // Brauzer o'rnatish tugmasini chiqarishi uchun ushbu event bo'sh bo'lmasligi kerak
  event.respondWith(
    fetch(event.request).catch(() => console.log("Oflayn rejim"))
  );
});
