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
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  ", "\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n  svg {\n    font-size: 40px;\n    color: #fff;\n    background: none;\n    cursor: pointer;\n    transition: background ease-in 0.2s, transform ease-in 0.2s;\n    border-radius: 50%;\n    margin: 0 10px;\n\n    &:hover {\n      background: rgba(0, 0, 0, 0.4);\n      transform: scale(1.3);\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  ",
    "\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n  svg {\n    font-size: 40px;\n    color: #fff;\n    background: none;\n    cursor: pointer;\n    transition: background ease-in 0.2s, transform ease-in 0.2s;\n    border-radius: 50%;\n    margin: 0 10px;\n\n    &:hover {\n      background: rgba(0, 0, 0, 0.4);\n      transform: scale(1.3);\n    }\n  }\n"])), function (props) {
    return props.direction === 'left'
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          left: 0;\n        "], ["\n          left: 0;\n        "]))) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          right: 0;\n        "], ["\n          right: 0;\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3;
