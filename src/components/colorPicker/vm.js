"use strict";

var ko = require("knockout");
var colorPicker = require("./ColorPicker.js");
var colorPickerCore = require("./core.js");

module.exports = colorPickerCore({
	ko: ko,
	colorPicker: colorPicker
});