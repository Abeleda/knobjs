/*jslint node: true */
"use strict";

module.exports = function pagedListCore(dependencies) {

	var obligatoryDeps = ["ko", "createList"];

	for (var i = 0; i < obligatoryDeps.length; i += 1) {
		if (typeof dependencies[obligatoryDeps[i]] === "undefined") {
			throw new Error("dependencies." + obligatoryDeps[i] + " is mandatory!");
		}
	}

	var ko = dependencies.ko;
	var createList = dependencies.createList;

	return function createDropdownSearchbox(config) {
		if (!config) {
			throw new Error("config is mandatory!");
		}

		if (!config.store) {
			throw new Error("config.store is mandatory!");
		}

		if (config.stateModel) {
			config.externalInit = true;
			if (!config.name) {
				throw new Error("If state saving is needed, config.name is mandatory!");
			}
		}

		if(!config.handleSelected) {
			throw new Error("config.handleSelected is mandatory!");
		}

		if(!config.handleNotFound) {
			throw new Error("config.handleNotFound is mandatory!");
		}

		if (!config.icons) {
			throw new Error("config.icons is mandatory!");
		}

		var name = config.name;

		var stateModel = config.stateModel;
		var store = config.store;

		store.load.before.add(beforeLoad);
		var list = createList(config);

		var defaultValidator = function() {
			return true;
		};

		var displayAlways = config.displayAlways || false;
		var handleSelected = config.handleSelected;
		var handleNotFound = config.handleNotFound;
		var validator = config.validator || defaultValidator;

		var itemsPerPage = ko.observable(10);

		list.listClass = config.listClass || "knob-pagedlist__list";
		list.itemClass = config.itemClass || "knob-pagedlist__item";
		list.itemsPerPage = itemsPerPage;

		if (stateModel) {
			stateModel.load(name, function (err, result) {
				if (err !== "NOT_FOUND") {
					if (result.data.itemsPerPage) {
						list.itemsPerPage(result.data.itemsPerPage);
					}

					if (result.data.search) {
						list.search(result.data.search);
					}
				}
				initStoreHandling();
			});
		} else {
			initStoreHandling();
		}

		function initStoreHandling() {
			ko.computed(function () {
				list.limit(itemsPerPage());
			});


			if (stateModel) {
				list.initStoreHandling();

				ko.computed(function () {
					var searchVal = list.search();
					var itemsPerPageVal = itemsPerPage();

					config.stateModel.create({
						name: name,
						search: searchVal,
						itemsPerPage: itemsPerPageVal
					}, function (err) {
						if (err) {
							return console.log(err);
						}
					});
				});
			}
		}

		function beforeLoad() {
			list.items([]);
		}

		//SELECT
		config.selected = config.selected;
		config.selected(null);

		config.selectedId = ko.computed(function () {
			var selectedVal = config.selected();

			if (!selectedVal) {
				return null;
			}

			console.log(selectedVal.data);

			if (!selectedVal || !selectedVal.data || typeof selectedVal.data.id === undefined) {
				throw new Error("dropdownSearchBox: Invalid superdata object");
			}

			return selectedVal.data.id;
		});

		config.select = function(item) {
			config.selected(item);
			handleSelected(item);
			reset();
		};

		var shouldDisplay = ko.computed(function () {
			var display = false;

			if (config.selected() === null && list.search() === "") {
				display = false;
			} else if (config.selected() === null && list.search() !== "") {
				display = true;
			} else if (config.selected() !== null) {
				display = false;
			} else if (config.search() !== "") {
				display = true;
			}
			return display || displayAlways;
		});

		var noResultLabel = ko.computed(function() {
			var label = "";
			if(validator(list.search())) {
				label = "Invite: " + list.search();
			} else {
				label = "Unkown user: " + list.search();
			}
			return label;
		});

		var notFoundItem = function() {
			var result = list.search();

			handleNotFound(validator(result));
			reset();
		};

		var clickMoreItem = function() {
			var label = list.search();
			if(validator(label)) {
				return notFoundItem();
			}
		};

		var reset = function() {
			config.selected(null);
			list.search("");
		};

		return {
			list: list,
			icons: config.icons,
			labels: config.labels,
			select: config.select,
			selectedId: config.selectedId,
			shouldDisplay: shouldDisplay,
			noResultLabel: noResultLabel,
			notFoundItem: notFoundItem,
			clickMoreItem: clickMoreItem
		};
	};
};
