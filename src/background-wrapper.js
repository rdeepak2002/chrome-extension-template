try {
  console.log('hello world from background-wrapper');
  /* eslint-disable no-undef */
  importScripts('background.bundle.js');
} catch (e) {
  console.error(e);
}
