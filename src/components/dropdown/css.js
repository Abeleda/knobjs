var tinycolor = require("tinycolor2");
var createColorShades = require("../../utils/colorShades");

module.exports = function(config) {

var baseColor = config.primary;  
var colorShades = createColorShades(baseColor);
var textColor = tinycolor(config.primary).isDark() ? "white" : "black";

let cssTemplate = `
.knob-dropdown-menu {
  z-index: 2;
  position: absolute;
  margin-top: 3px;
}
.knob-button {
  text-align: left;
  border-radius: 0px;
  border-width: 1px;
  border-top: 0px;
}
.knob-dropdown-menu button {
  width: 100%;
  text-align: left;
  border-radius: 0px;
  border-width: 1px;
  border-top: 0px;
}
.knob-button:hover {
  text-align: left;
  border-radius: 0px;
  border-width: 1px;
  border-top: 0px;
  background-color: ${ colorShades.color4 };
}
.knob-dropdown-menu button:hover {
  width: 100%;
  text-align: left;
  border-radius: 0px;
  border-width: 1px;
  border-top: 0px;
  background-color: ${ colorShades.color4 };
}
.knob-dropdown-menu div:first-of-type button {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.knob-dropdown-menu div:last-of-type button {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
`;
	return cssTemplate;
};