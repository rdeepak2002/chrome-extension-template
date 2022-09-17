// this is a content script that allows us to modify the page we are on: https://developer.chrome.com/docs/extensions/mv3/content_scripts/

import $ from 'jquery';

console.log('content.js injected into webpage');

// dummy example code of seraching for the description HTML element of a YouTube video using JQuery
const descriptionElement = $('.ytd-watch-metadata');
console.log('youtube description element: ', descriptionElement);
