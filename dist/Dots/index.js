"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("./styles");
var Dots = function (_a) {
    var slides = _a.slides, activeSlide = _a.activeSlide, dotsDiameter = _a.dotsDiameter, handleClick = _a.handleClick;
    return (jsx_runtime_1.jsx(styles_1.Container, { children: slides.map(function (slide, index) { return (jsx_runtime_1.jsx(styles_1.Dot, { active: index === activeSlide, onClick: function () { return handleClick(index); }, dotsDiameter: dotsDiameter }, slide.id)); }) }, void 0));
};
exports.default = Dots;
