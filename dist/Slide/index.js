"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_1 = require("./styles");
var Slide = function (_a) {
    var img = _a.img, spaceBetweenSlides = _a.spaceBetweenSlides, focusSlide = _a.focusSlide, slideFocusColor = _a.slideFocusColor, slideBorderRadius = _a.slideBorderRadius;
    return (jsx_runtime_1.jsx(styles_1.Container, __assign({ spaceBetweenSlides: spaceBetweenSlides, containerBorderRadius: slideBorderRadius }, { children: jsx_runtime_1.jsx(styles_1.Image, { img: img, focusSlide: focusSlide, slideFocusColor: slideFocusColor, slideBorderRadius: slideBorderRadius }, void 0) }), void 0));
};
exports.default = react_1.memo(Slide);
