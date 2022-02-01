"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var theme_1 = require("../core/theme");
var status_bar_1 = require("./status-bar");
var Page = function (_a) {
    var _b = _a.scrollable, scrollable = _b === void 0 ? false : _b, style = _a.style, children = _a.children, viewProps = __rest(_a, ["scrollable", "style", "children"]);
    var theme = (0, theme_1.useTheme)();
    var viewStyle = [
        {
            flex: 1,
            backgroundColor: theme.backgroundColor.secondary,
        },
        style,
    ];
    if (scrollable) {
        return (<react_native_1.ScrollView style={viewStyle} {...viewProps}>
        <status_bar_1.StatusBar style="auto"/>
        {children}
      </react_native_1.ScrollView>);
    }
    return (<react_native_1.View style={viewStyle} {...viewProps}>
      <status_bar_1.StatusBar style="auto"/>
      {children}
    </react_native_1.View>);
};
exports.Page = Page;
//# sourceMappingURL=page.js.map