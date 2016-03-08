'use strict';

var dyslexia = require('dyslexia');
var raf = require('raf');
var $ = require('jquery');

// Create a list of text nodes to be messed up
var textNodes = $('body *').not('iframe').contents().filter(function() {
  return this.nodeType === 3;
});

// Iterate over each text node and mess up their values.
// Use request animation frame with setTimeout so we scramble words every 100ms (for the dyslexia effect)
// and scrolling doesn't get stuttery (updates to the DOM only happen when raf allows them to).
raf(function scramble() {
  for (var i = 0; i < textNodes.length; i++) {
    textNodes[i].nodeValue = dyslexia(textNodes[i].nodeValue, {
      scrambleChance: 10
    });
  }

  setTimeout(function() {
    raf(scramble);
  }, 100);
})
