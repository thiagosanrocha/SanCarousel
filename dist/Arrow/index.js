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
var fi_1 = require("react-icons/fi");
var styles_1 = require("./styles");
var Arrow = function (_a) {
    var direction = _a.direction, handleClick = _a.handleClick;
    return (jsx_runtime_1.jsx(styles_1.Container, __assign({ direction: direction, onClick: handleClick }, { children: direction === 'left' ? jsx_runtime_1.jsx(fi_1.FiChevronLeft, {}, void 0) : jsx_runtime_1.jsx(fi_1.FiChevronRight, {}, void 0) }), void 0));
};
exports.default = react_1.memo(Arrow);
