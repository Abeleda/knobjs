"use strict";

//*/

//THIS FILE SHOULD BE GENERATED

var extend = require("extend");
var ko = require("knockout");
var superschema = require("superschema");

var notifications = require("./utils/notifications");
var registerComponent = require("./knobRegisterComponent");

var listVm = require("./components/list/vm");

superschema.extend({
	ko: ko
});

function initKnob(config) {
	if (!config) {
		config = {};
	}

	var defaultIcons = {
		search: "#icon-search",
		sort: {
			asc: "#icon-sort-asc",
			desc: "#icon-sort-desc"
		},
		dropdown: "#icon-expand-more",
		loading: "#icon-loading",
		pagination: {
			first: "#icon-first-page",
			prev: "#icon-chevron-left",
			last: "#icon-last-page",
			next: "#icon-chevron-right"
		},
		tick: "#icon-done",
		plus: "#icon-add",
		minus: "#icon-minus",
		full: "#icon-copy",
		numericInput:{
			increase: "#icon-uparrow",
			decrease: "#icon-downarrow"
		},
		inlineTextEditor: {
			edit: "#icon-edit",
			done: "#icon-done",
			close: "#icon-close"
		},
		back: "#icon-back"
	};

	var defaultLabels = {
		noResults: "No results"
	};

	var icons = extend(true, {}, defaultIcons, config.icons);
	var labels = extend(true, {}, defaultLabels, config.labels);

	registerComponent({
		name: "knob-button",
		createVm: require("./components/button/vm"),
		template: require("./components/button/template.html"),
		css: require("./components/button/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-input",
		createVm: require("./components/input/vm"),
		template: require("./components/input/template.html"),
		css: require("./components/input/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-textarea",
		createVm: require("./components/textarea/vm"),
		template: require("./components/textarea/template.html"),
		css: require("./components/textarea/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-radio",
		createVm: require("./components/radio/vm"),
		template: require("./components/radio/template.html"),
		css: require("./components/radio/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-inline-text-editor",
		createVm: require("./components/inlineTextEditor/vm"),
		template: require("./components/inlineTextEditor/template.html"),
		icons: icons.inlineTextEditor,
		css: require("./components/inlineTextEditor/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-dropdown",
		createVm: require("./components/dropdown/vm"),
		template: require("./components/dropdown/template.html"),
		css: require("./components/dropdown/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-pagination",
		createVm: require("./components/pagination/vm"),
		template: require("./components/pagination/template.html"),
		icons: icons.pagination,
		css: require("./components/pagination/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-items-per-page",
		createVm: require("./components/itemsPerPage/vm"),
		template: require("./components/itemsPerPage/template.html"),
		icons: {
			dropdown: icons.dropdown
		}
	});

	registerComponent({
		name: "knob-paged-list",
		createVm: require("./components/pagedList/vm"),
		template: require("./components/pagedList/template.html"),
		icons: {
			search: icons.search,
			sort: icons.sort,
			dropdown: icons.dropdown,
			loading: icons.loading
		},
		labels: {
			noResults: labels.noResults
		},
		css: require("./components/pagedList/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-selectable-paged-list",
		createVm: require("./components/selectablePagedList/vm"),
		template: require("./components/selectablePagedList/template.html"),
		icons: {
			search: icons.search,
			sort: icons.sort,
			dropdown: icons.dropdown
		},
		labels: {
			noResults: labels.noResults
		},
		css: require("./components/selectablePagedList/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-infinite-list",
		createVm: require("./components/infiniteList/vm"),
		template: require("./components/infiniteList/template.html"),
		css: require("./components/infiniteList/css"),
		colors: config.colors,
		icons: {
			search: icons.search,
			sort: icons.sort,
			dropdown: icons.dropdown,
			loading: icons.loading
		},
		labels: {
			noResults: labels.noResults,
			loadMore: labels.loadMore
		}
	});

	registerComponent({
		name: "knob-toggleswitch",
		createVm: require("./components/toggleSwitch/vm"),
		template: require("./components/toggleSwitch/template.html"),
		css: require("./components/toggleSwitch/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-modal",
		createVm: require("./components/modal/vm"),
		template: require("./components/modal/template.html"),
		css: require("./components/modal/css"),
		icons: {
			back: icons.back
		},
		colors: config.colors
	});

	registerComponent({
		name: "knob-confirm",
		createVm: require("./components/modal/confirm/vm"),
		template: require("./components/modal/confirm/template.html"),
		css: require("./components/modal/confirm/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-alert",
		createVm: require("./components/modal/alert/vm"),
		template: require("./components/modal/alert/template.html"),
		css: require("./components/modal/alert/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-tabs",
		createVm: require("./components/tabs/vm"),
		template: require("./components/tabs/template.html"),
		css: require("./components/tabs/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-tab",
		createVm: require("./components/tabs/tab/vm"),
		template: require("./components/tabs/tab/template.html"),
		css: require("./components/tabs/tab/css"),
		colors: config.colors
	});

	registerComponent({
		name: "knob-checkbox",
		createVm: require("./components/checkbox/vm"),
		template: require("./components/checkbox/template.html"),
		css: require("./components/checkbox/css"),
		colors: config.colors,
		icons: {
			tick: icons.tick,
			plus: icons.plus,
			minus: icons.minus,
			full: icons.full
		}
	});

	registerComponent({
		name: "knob-numericinput",
		createVm: require("./components/numericInput/vm"),
		template: require("./components/numericInput/template.html"),
		icons: icons.numericInput,
		css: require("./components/numericInput/css"),
		colors: config.colors,
	});

	registerComponent({
		name: "knob-dropdown-searchbox",
		createVm: require("./components/dropdownSearchbox/vm"),
		template: require("./components/dropdownSearchbox/template.html"),
		css: require("./components/dropdownSearchbox/css"),
		colors: config.colors,
		icons: {
			search: icons.search,
			sort: icons.sort,
			dropdown: icons.dropdown
		}
	});

	registerComponent({
		name: "knob-tooltip",
		createVm: require("./components/tooltip/vm"),
		template: require("./components/tooltip/template.html"),
		css: require("./components/tooltip/css"),
		colors: config.colors,
	});

	registerComponent({
		name: "knob-notification",
		createVm: require("./components/notification/vm"),
		template: require("./components/notification/template.html"),
		css: require("./components/notification/css"),
		colors: config.colors
	});

	registerComponent({
		name: "color-picker",
		createVm: require("./components/colorPicker/vm"),
		template: require("./components/colorPicker/template.html"),
		css: require("./components/colorPicker/css"),
		colors: config.colors
	});

	registerComponent({
		name: "color-picker-in-tooltip",
		createVm: require("./components/colorPickerInTooltip/vm"),
		template: require("./components/colorPickerInTooltip/template.html"),
		css: require("./components/colorPickerInTooltip/css"),
		colors: config.colors
	});

	if (config.background) {
		document.body.style.backgroundColor = config.background;
	}
}

module.exports = {
	notifications: notifications,
	init: initKnob,
	registerComponent: registerComponent,
	listVm: listVm
};

