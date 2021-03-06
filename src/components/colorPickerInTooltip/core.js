"use strict";

var superschema = require("superschema");

var dependencyPattern = {
	ko: "object",
	extend: "function"
};

var configPattern = {
	color: "observable string"
};

var defaultLabels = {
	error: "It has to be a hex color code!"
};

module.exports = function(dependencies) {
	var checkParams = superschema.check;

	checkParams(dependencies, dependencyPattern, "dependencies");

	var ko = dependencies.ko;
	var extend = dependencies.extend;
	var window = dependencies.window;

	return function createColorPickerTooltip(config) {
		checkParams(config, configPattern, "config");
		var labels = extend(true, {}, defaultLabels, config.labels);

		var color = config.color;
		var arrowDir = config.arrowDir || "up";

		var pickerEnabled = ko.observable(false);

		function hidePicker() {
			pickerEnabled(false);
			window.removeEventListener("click", hidePicker);
		}
		
		function showPicker() {
			pickerEnabled(true);
			window.setTimeout(() => {
				window.addEventListener("click", hidePicker);	
			});
		}

		var error = ko.observable(null);

		var validColor = ko.computed({
			read: function() {
				return color();
			},
			write: function(newValue) {
				error("");

				if (newValue === "") {
					return color("");
				}

				var hexCodeRegex = /^#([A-Fa-f0-9]{6})$/;
				if (!hexCodeRegex.test(newValue)) {
					return error(labels.error);
				}

				color(newValue);
			}
		});

		var inputColor = ko.computed({
			read: function() {
				return validColor();
			},
			write: function(newValue) {
				validColor(newValue);
			}
		}).extend({
			throttle: 1000
		});
		
		return {
			labels: labels,
			arrowDir: arrowDir,
			inputColor: inputColor,
			color: validColor,
			pickerEnabled: pickerEnabled,
			hidePicker: hidePicker,
			showPicker: showPicker,

			error: error
		};
	};
};