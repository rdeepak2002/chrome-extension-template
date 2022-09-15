try {
  console.log("hello world from background-wrapper")
  importScripts("background.bundle.js");
} catch (e) {
  console.error(e);
}
