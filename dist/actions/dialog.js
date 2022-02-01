"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPrompt = exports.showConfirm = exports.showAlert = void 0;
var react_1 = __importDefault(require("react"));
var dialog_1 = require("../components/dialog");
var modal_1 = require("./modal");
var showAlert = function (options) {
    return new Promise(function (resolve) {
        var dispose = (0, modal_1.showModal)({
            builder: function (_a) {
                var visible = _a.visible, handleDismiss = _a.handleDismiss;
                return (<dialog_1.AlertDialog visible={visible} onDismiss={handleDismiss} onUnmounted={function () {
                        resolve(dispose());
                    }} {...options}/>);
            },
        }).dispose;
    });
};
exports.showAlert = showAlert;
var showConfirm = function (options) {
    return new Promise(function (resolve) {
        var value;
        var dispose = (0, modal_1.showModal)({
            builder: function (_a) {
                var visible = _a.visible, handleDismiss = _a.handleDismiss;
                return (<dialog_1.ConfirmDialog visible={visible} onDismiss={function (result) {
                        value = result;
                        handleDismiss();
                    }} onUnmounted={function () {
                        dispose();
                        resolve(value);
                    }} {...options}/>);
            },
        }).dispose;
    });
};
exports.showConfirm = showConfirm;
var showPrompt = function (options) {
    return new Promise(function (resolve) {
        var value;
        var dispose = (0, modal_1.showModal)({
            builder: function (_a) {
                var visible = _a.visible, handleDismiss = _a.handleDismiss;
                return (<dialog_1.PromptDialog visible={visible} onDismiss={function (result) {
                        value = result;
                        handleDismiss();
                    }} onUnmounted={function () {
                        dispose();
                        resolve(value);
                    }} {...options}/>);
            },
        }).dispose;
    });
};
exports.showPrompt = showPrompt;
//# sourceMappingURL=dialog.js.map