"use strict";

module.exports = function(dependencies) {
	if(!dependencies) {
		throw new Error("dependencies is mandatory!");
	}

	if(!dependencies.ko) {
		throw new Error("dependencies.ko is mandatory!");
	}

	if(!dependencies.base) {
		throw new Error("dependencies.base is mandatory!");
	}

	var ko = dependencies.ko;
	var base = dependencies.base;

	return function createNotification(config) {

		if (!config) {
			throw new Error("config is mandatory!");
		}

		if (!config.message) {
			throw new Error("config.message element is mandatory!");
		}

		if (config.visible && !ko.isObservable(config.visible)) {
			throw new Error("config.visible must be an observable");
		}

		config = config || {};

		var visible = config.visible;
		var message = config.message;
		var icon = config.icon;

		visible.toggle = function() {
			visible(!visible());
		};

		config.component = "notification";

		var vm = base(config);

		vm.visible = visible;
		vm.message = message;
		vm.icon = icon;

		return vm;
	};
}