if (typeof window !== 'undefined') {
  window.addEventListener("error", (e) => {
    console.error("GLOBAL ERROR", e);
  });
}
