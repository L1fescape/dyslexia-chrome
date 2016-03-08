'use strict';

var dyslexia = require('dyslexia');
var $ = require('jquery');

// create a list of text nodes to be messed up
var textNodes = $('*').contents().filter(function() {
  return this.nodeType === 3;
});

// iterate over each text node and mess up their values
setInterval(function() {
  for (var i = 0; i < textNodes.length; i++) {
    textNodes[i].nodeValue = dyslexia(textNodes[i].nodeValue, {
      scrambleChance: 80
    });
  }
}, 50);
