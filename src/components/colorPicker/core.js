/*jslint node: true */
"use strict";

/** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool **/

module.exports = function(dependencies) {
	if(!dependencies) {
		throw new Error("dependencies is mandatory!");
	}

	if(!dependencies.ko) {
		throw new Error("dependencies.ko is mandatory!");
    }
    
    if(!dependencies.colorPicker) {
		throw new Error("dependencies.colorPicker is mandatory!");
	}

    var ko = dependencies.ko;
    var colorPicker = dependencies.colorPicker;

	return function createColorPicker(config) {
		config = config || {};

        var actColor = ko.observable("#C14242");

        console.log(actColor());

        return {
            actColor: actColor
        };
    };
};