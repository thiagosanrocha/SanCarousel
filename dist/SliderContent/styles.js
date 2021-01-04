"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n\n  ", "\n"], ["\n  height: 100%;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n\n  ",
    "\n"])), function (props) { return (props.slideSize ? props.slideSize : '100%'); }, function (props) { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transform: translateX(-", "%);\n    transition: transform ", "s;\n  "], ["\n    transform: translateX(-", "%);\n    transition: transform ", "s;\n  "])), props.translateX, props.transition); });
var templateObject_1, templateObject_2;
