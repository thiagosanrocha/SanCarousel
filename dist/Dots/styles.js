"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 5%;\n  right: 8%;\n  display: flex;\n  align-items: center;\n"], ["\n  position: absolute;\n  bottom: 5%;\n  right: 8%;\n  display: flex;\n  align-items: center;\n"])));
exports.Dot = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background: ", ";\n  cursor: pointer;\n\n  & + span {\n    margin-left: 10px;\n  }\n"], ["\n  display: block;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background: ", ";\n  cursor: pointer;\n\n  & + span {\n    margin-left: 10px;\n  }\n"])), function (props) { return (props.dotsDiameter ? props.dotsDiameter : '10'); }, function (props) { return (props.dotsDiameter ? props.dotsDiameter : '10'); }, function (props) { return (props.active ? '#FFF' : 'rgba(255, 255, 255, 0.5)'); });
var templateObject_1, templateObject_2;
