// this is a wrapper script to invoke our service worker

try {
  /* eslint-disable no-undef */
  importScripts('background.bundle.js');
} catch (e) {
  console.error(e);
}
