"use strict";

var createColorShades = require("../../utils/colorShades");

module.exports = function (config) {

      var baseColor = config.default;
      var colorShades = createColorShades(baseColor);

      let cssTemplate = `
            #left {
                  float: left;
                  width: 160px;
            }

            #right {
                  float: right;
                  width: 200px;
            }

            #middle {
                  width: 198px;
            }

            #midd-right {
                  width: 150px;
                  float: right;
            }

            #bottom {
                  width: 198px;
                  float: left;
            }

            #button {
                  float: right;
                  margin-right: 15px;
            }

            /*
            * COLOR PICKER TOOL
            */

            .ui-color-picker {
                  width: 392px;
                  margin: 0;
                  border: 1px solid #DDD;
                  background-color: #FFF;
                  display: table;

                  -moz-user-select: none;
                  -webkit-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
            }

            .ui-color-picker .picking-area {
                  width: 150px;
                  height: 150px;
                  margin: 5px;
                  border: 1px solid #DDD;
                  position: relative;
                  float: left;
                  display: table;
            }

            .ui-color-picker .picking-area:hover {
                  cursor: default;
            }

            /* HSV format - Hue-Saturation-Value(Brightness) */
            .ui-color-picker .picking-area {
            background: url('https://mdn.mozillademos.org/files/5707/picker_mask_200.png') center center;

            background: -moz-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
                  -moz-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
            background: -webkit-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
                  -webkit-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
            background: -ms-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
                  -ms-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);
            background: -o-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
                  -o-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%);

            background-color: #F00;
            }

            /* HSL format - Hue-Saturation-Lightness */
            .ui-color-picker[data-mode='HSL'] .picking-area {
            background: -moz-linear-gradient(top, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%,
                        hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%),
                  -moz-linear-gradient(left, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%);
            background: -webkit-linear-gradient(top, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%,
                        hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%),
                  -webkit-linear-gradient(left, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%);
            background: -ms-linear-gradient(top, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%,
                        hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%),
                  -ms-linear-gradient(left, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%);
            background: -o-linear-gradient(top, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%,
                        hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%),
                  -o-linear-gradient(left, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%);
            background-color: #F00;
            }

            .ui-color-picker .picker {
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  border: 1px solid #FFF;
                  position: absolute;
                  top: 45%;
                  left: 45%;
            }

            .ui-color-picker .picker:before {
                  width: 8px;
                  height: 8px;
                  content: "";
                  position: absolute;
                  border: 1px solid #999;
                  border-radius: 50%;
            }

            .ui-color-picker .hue {
                  width: 188px;
                  height: 28px;
                  margin: 5px;
                  margin-bottom: 0px;
                  border: 1px solid #FFF;
                  float: left;
            }

            .ui-color-picker .hue {
            background: url("https://mdn.mozillademos.org/files/5701/hue.png") center;
            background: -moz-linear-gradient(left, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%,
                  #00F 66.66%, #F0F 83.33%, #F00 100%);
            background: -webkit-linear-gradient(left, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%,
                  #00F 66.66%, #F0F 83.33%, #F00 100%);
            background: -ms-linear-gradient(left, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%,
                  #00F 66.66%, #F0F 83.33%, #F00 100%);
            background: -o-linear-gradient(left, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%,
                  #00F 66.66%, #F0F 83.33%, #F00 100%);
            }

            .ui-color-picker .slider-picker {
                  width: 2px;
                  height: 100%;
                  border: 1px solid #777;
                  background-color: #FFF;
                  position: relative;
                  top: -1px;
            }

            /* input HSV and RGB */

            .ui-color-picker .info {
                  width: 198px;
                  margin: 5px;
                  float: right;
            }

            .ui-color-picker .info * {
                  float: left;
            }

            .ui-color-picker .input {
                  max-width: 80px;
                  margin: 5px 2px;
                  float: left;
                  display: relative;
            }

            .ui-color-picker .input .name {
                  height: 16px;
                  width: 80px;
                  margin-left: 10px;
                  text-align: center;
                  font-size: 14px;
                  line-height: 18px;
                  float: left;
            }

            .ui-color-picker .input input {
                  height: 16px;
                  width: 80px;
                  margin: 0;
                  padding: 0;
                  border: 1px solid #DDD;
                  text-align: center;
                  float: left;

                  -moz-user-select: text;
                  -webkit-user-select: text;
                  -ms-user-select: text;
            }

            .ui-color-picker .input[data-topic="hexa"] {
                  width: auto;
                  float: left;
                  margin: 6px 8px 0 0;
            }

            .ui-color-picker .input[data-topic="hexa"] > .name {
                  display: absolute;
            }

            .ui-color-picker .input[data-topic="hexa"] > input {
                  width: 90px;
                  height: 24px;
                  padding: 2px 0;
                  margin: 5px;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
            }

            /* Preview color */
            .ui-color-picker .preview {
                  width: 42px;
                  height: 42px;
                  margin: 5px;
                  margin-top: 10px;
                  border: 1px solid #DDD;
                  background-image: url("https://mdn.mozillademos.org/files/5705/alpha.png");
                  float: right;
                  position: relative;
            }

            .ui-color-picker .preview:before {
                  height: 100%;
                  width: 50%;
                  left: 50%;
                  top: 0;
                  content: "";
                  background: #FFF;
                  position: absolute;
                  z-index: 1;
            }

            .ui-color-picker .preview-color {
                  width: 100%;
                  height: 100%;
                  background-color: rgba(255, 0, 0, 0.5);
                  position: absolute;
                  z-index: 1;
            }

            .ui-color-picker .switch_mode {
                  width: 10px;
                  height: 20px;
                  position: relative;
                  border-radius: 5px 0 0 5px;
                  border: 1px solid #DDD;
                  background-color: #EEE;
                  left: -12px;
                  top: -1px;
                  z-index: 1;
                  transition: all 0.5s;
            }

            .ui-color-picker .switch_mode:hover {
                  background-color: #CCC;
                  cursor: pointer;
            }

            .transparent {
                  width: 55px;
                  height: 55px;
                  margin-top: 10px;
                  margin-left: 5px;
                  border: 1px solid #DDD;
                  background-image: url("https://mdn.mozillademos.org/files/5705/alpha.png");
                  float: left;
            }

            /*
            * COLOR PICKER TOOL
            */

            body {
                  max-width: 450px;
                  margin: 0 auto;

                  font-family: "Segoe UI", Arial, Helvetica, sans-serif;

                  box-shadow: 0 0 5px 0 #999;

                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;

                  -moz-user-select: none;
                  -webkit-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
            }

            /**
            * Resize Handle
            */
            .resize-handle {
                  width: 10px;
                  height: 10px;
                  background: url('https://mdn.mozillademos.org/files/6083/resize.png') center center no-repeat;
                  position: absolute;
                  bottom: 0;
                  right: 0;
            }

            [data-resize='both']:hover {
                  cursor: nw-resize !important;
            }

            [data-resize='width']:hover {
                  cursor: w-resize !important;
            }

            [data-resize='height']:hover {
                  cursor: n-resize !important;
            }

            [data-hidden='true'] {
                  display: none;
            }

            [data-collapsed='true'] {
                  height: 0 !important;
            }

            .block {
                  display: table;
            }


            /**
            * 	Container
            */
            #container {
                  width: 392px;
            }

            /**
            * 	Picker Zone
            */

            #picker {
                  width: 392px;
            }

            .ui-color-picker {
                  padding: 3px 5px;
                  float: left;
                  border-color: #FFF;
            }

            .ui-color-picker .switch_mode {
                  display: none;
            }

            .ui-color-picker .preview-color:hover {
                  cursor: move;
            }

            /**
            * Picker Container
            */

            #picker-samples {
                  width: 135px;
                  height: 60px;
                  max-height: 80px;
                  margin: 0;
                  overflow: hidden;
                  position: relative;
                  float: right;

                  transition: all 0.2s;
            }

            #picker-samples .sample {
                  width: 25px;
                  height: 25px;
                  margin: 2px;
                  border: 1px solid #DDD;
                  position: absolute;
                  float: right;
                  transition: all 0.2s;
            }

            #picker-samples .sample:hover {
                  cursor: pointer;
                  border-color: #BBB;
                  transform: scale(1.15);
                  border-radius: 3px;
            }

            #picker-samples .sample[data-active='true'] {
                  border-color: #999;
            }

            #picker-samples .sample[data-active='true']:after {
                  content: "";
                  position: absolute;
                  background: url('https://mdn.mozillademos.org/files/6065/arrow.png') center no-repeat;
                  width: 100%;
                  height: 5px;
                  top: -5px;
                  z-index: 2;
            }
`;
      return cssTemplate;
};