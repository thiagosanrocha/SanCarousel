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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SliderContent_1 = __importDefault(require("./SliderContent"));
var Slide_1 = __importDefault(require("./Slide"));
var Arrow_1 = __importDefault(require("./Arrow"));
var Dots_1 = __importDefault(require("./Dots"));
var styles_1 = require("./styles");
var SanCarousel = function (_a) {
    var slides = _a.slides, _b = _a.transitionTime, transitionTime = _b === void 0 ? 0.45 : _b, autoPlay = _a.autoPlay, width = _a.width, height = _a.height, _c = _a.dots, dots = _c === void 0 ? true : _c, dotsDiameter = _a.dotsDiameter, _d = _a.arrows, arrows = _d === void 0 ? true : _d, slideSize = _a.slideSize, spaceBetweenSlides = _a.spaceBetweenSlides, focusSlide = _a.focusSlide, slideFocusColor = _a.slideFocusColor, slideBorderRadius = _a.slideBorderRadius;
    var _e = react_1.useState(!!autoPlay), isAutoPlayed = _e[0], setIsAutoPlayed = _e[1];
    var _f = react_1.useState({
        activeSlide: 0,
        translate: 0,
        transition: transitionTime,
    }), settings = _f[0], setSettings = _f[1];
    var _slides = react_1.useState(function () {
        return slides.map(function (slide, index) { return (__assign(__assign({}, slide), { id: index })); });
    })[0];
    var activeSlide = settings.activeSlide, translate = settings.translate, transition = settings.transition;
    var nextSlide = react_1.useCallback(function () {
        if (activeSlide === _slides.length - 1) {
            return setSettings(__assign(__assign({}, settings), { activeSlide: 0, translate: 0 }));
        }
        return setSettings(__assign(__assign({}, settings), { activeSlide: activeSlide + 1, translate: (activeSlide + 1) * 100 }));
    }, [activeSlide, _slides.length, settings]);
    react_1.useEffect(function () {
        if (autoPlay && isAutoPlayed) {
            var interval_1 = setInterval(nextSlide, autoPlay);
            return function () { return clearInterval(interval_1); };
        }
        return function () { return ({}); };
    }, [nextSlide, autoPlay, isAutoPlayed]);
    var prevSlide = react_1.useCallback(function () {
        if (activeSlide === 0) {
            return setSettings(__assign(__assign({}, settings), { activeSlide: _slides.length - 1, translate: (_slides.length - 1) * 100 }));
        }
        return setSettings(__assign(__assign({}, settings), { activeSlide: activeSlide - 1, translate: (activeSlide - 1) * 100 }));
    }, [activeSlide, _slides.length, settings]);
    var goToSlide = react_1.useCallback(function (index) {
        setSettings(__assign(__assign({}, settings), { activeSlide: index, translate: index * 100 }));
    }, [settings]);
    return (jsx_runtime_1.jsxs(styles_1.Container, __assign({ onMouseEnter: function () { return setIsAutoPlayed(false); }, onMouseLeave: function () { return setIsAutoPlayed(true); }, width: width, height: height }, { children: [jsx_runtime_1.jsx(SliderContent_1.default, __assign({ translate: translate, transition: transition, slideSize: slideSize }, { children: _slides.map(function (slide) { return (jsx_runtime_1.jsx(Slide_1.default, { img: slide.img, spaceBetweenSlides: spaceBetweenSlides, focusSlide: focusSlide, slideFocusColor: slideFocusColor, slideBorderRadius: slideBorderRadius }, slide.id)); }) }), void 0),
            arrows && (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(Arrow_1.default, { direction: "left", handleClick: prevSlide }, void 0),
                    jsx_runtime_1.jsx(Arrow_1.default, { direction: "right", handleClick: nextSlide }, void 0)] }, void 0)),
            dots && (jsx_runtime_1.jsx(Dots_1.default, { activeSlide: activeSlide, slides: _slides, handleClick: goToSlide, dotsDiameter: dotsDiameter }, void 0))] }), void 0));
};
exports.default = SanCarousel;
