"use strict";
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
exports.ThemeProvider = exports.useTheme = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var dark_1 = require("../themes/dark");
var light_1 = require("../themes/light");
var themeContext = react_1.default.createContext({});
var useTheme = function () { return (0, react_1.useContext)(themeContext); };
exports.useTheme = useTheme;
var ThemeProvider = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? light_1.LightTheme : _b, _c = _a.darkTheme, darkTheme = _c === void 0 ? dark_1.DarkTheme : _c, children = _a.children;
    var colorScheme = (0, react_native_1.useColorScheme)();
    var selected = colorScheme === 'light' ? theme : darkTheme;
    return (<themeContext.Provider value={selected}>{children}</themeContext.Provider>);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=theme.js.map