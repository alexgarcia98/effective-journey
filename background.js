/**
 * Returns a handler which will get the image description and verbalize it.
 */
function getClickHandler() {
  return function(info, tab) {
    console.log(info.srcUrl);
    chrome.tts.speak('This is a picture of a smiling person.');
  };
};

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Get image description",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});
