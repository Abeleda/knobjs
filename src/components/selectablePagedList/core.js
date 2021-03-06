/*jslint node: true */
"use strict";

module.exports = function pagedListCore(dependencies) {

	var obligatoryDeps = ["ko"];

	for (var i = 0; i < obligatoryDeps.length; i += 1) {
		if (typeof dependencies[obligatoryDeps[i]] === "undefined") {
			throw new Error("dependencies." + obligatoryDeps[i] + " is mandatory!");
		}
	}

	var ko = dependencies.ko;

	return function createSelectablePagedList(config) {
		if (!config) {
			throw new Error("config is mandatory!");
		}

		if (!ko.isObservable(config.selected)) {
			throw new Error("config.selected is mandatory, and it has to be an observable!");
		}

		config.selected = config.selected;
		config.selected(null);
		config.selectedId = ko.computed(function () {
			var selectedVal = config.selected();

			if (!selectedVal) {
				return null;
			}

			if (!selectedVal.model || !selectedVal.model.data || typeof selectedVal.model.data.id === undefined) {
				throw new Error("selectablePagedList: Invalid superdata object");
			}

			return selectedVal.model.data.id;
		});

		config.select = function (item) {
			config.selected(item);
		};

		return config;
	};
};
