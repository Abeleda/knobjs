"use strict";

module.exports = function(dependencies) {
	if (!dependencies) {
		throw new Error("dependencies are mandatory!");
	}

	if (!dependencies.ko) {
		throw new Error("dependencies.ko is mandatory!");
	}

	var ko = dependencies.ko;

	return function createToggleSwitch(config) {
		if (!config) {
			config = {};
		}

		if (!ko.isObservable(config.value)) {
			throw new Error("config.value is mandatory and has to be an observable!");
		}

		var square = ko.observable(false);
		var disabled = ko.observable(false);

		if (config.shape === "square"){
			square(true);
		}

		disabled(config.disabled || false);

		var value = config.value;
		var click = function() {
			if(!disabled()) {
				value(!value());
			}
		};

		return {
			value: value,
			click: click,
			square: square,
			disabled: disabled
		};
	};
};
