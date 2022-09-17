import { loadPage } from './util';

/**
 * Show the page contents
 */
function show() {
  loadPage('pages/sharing.html', () => {
    console.log('Page loaded');

    // example sending message to content.js
    chrome.runtime.sendMessage({ greeting: 'hello' }, (response) => {
      console.log(response.farewell);
    });
  });
}

/**
 * Export this page as an object
 */
const sharingPage = {
  show,
};

// eslint-disable-next-line import/prefer-default-export
export default sharingPage;
