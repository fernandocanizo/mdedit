// Creation Date: 2015.07.12

"use strict";
/* global showdown */

window.onload = function() {
	var converter = new showdown.Converter();
	var pad = document.getElementById('pad');
	var markdownArea = document.getElementById('markdown');

	var toMarkdown = function() {
		var source = pad.value;
		var html = converter.makeHtml(source);
		markdownArea.innerHTML = html;
	};

	pad.addEventListener('input', toMarkdown);

	toMarkdown();
};
