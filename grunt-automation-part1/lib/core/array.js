/* jshint browser: true, -W121 */
/* globals alert */
(function () {
	'use strict';
	Array.prototype.doNot = function () {
		alert('Extending Array\'s prototype is a really bad habit');
	};
}());
