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
exports.Image = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  min-width: 100%;\n  padding: 0\n    ", ";\n\n  ", "\n"], ["\n  height: 100%;\n  min-width: 100%;\n  padding: 0\n    ", ";\n\n  ",
    "\n"])), function (props) { return (props.spaceBetweenSlides ? props.spaceBetweenSlides : 0); }, function (props) {
    return props.containerBorderRadius && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), props.containerBorderRadius);
});
exports.Image = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  background: url(", ") no-repeat center;\n  background-size: cover;\n\n  ", "\n\n  ", ";\n"], ["\n  height: 100%;\n  width: 100%;\n  background: url(", ") no-repeat center;\n  background-size: cover;\n\n  ",
    "\n\n  ",
    ";\n"])), function (props) { return props.img; }, function (props) {
    return props.slideBorderRadius && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), props.slideBorderRadius);
}, function (props) {
    return props.focusSlide && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border: 4px solid transparent;\n      transition: border 0.3s;\n\n      &:hover {\n        border: 4px solid\n          ", ";\n      }\n    "], ["\n      border: 4px solid transparent;\n      transition: border 0.3s;\n\n      &:hover {\n        border: 4px solid\n          ", ";\n      }\n    "])), props.slideFocusColor ? props.slideFocusColor : '#FFF');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
