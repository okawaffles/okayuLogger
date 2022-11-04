"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
function getTime() {
    var d = new Date();
    var hr = d.getHours();
    var mn = d.getMinutes();
    var sc = d.getSeconds();
    if (hr < 10)
        hr = parseInt("0".concat(hr));
    if (mn < 10)
        mn = parseInt("0".concat(mn));
    if (sc < 10)
        sc = parseInt("0".concat(sc));
    return "".concat(hr, ":").concat(mn, ":").concat(sc);
}
function info(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgCyan)('INFO '), " [").concat((0, chalk_1.bold)(name), "] ").concat(text));
}
function warn(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(name), "] ").concat(text));
}
function error(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(name), "] ").concat(text));
}
/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
 */
var Logger = /** @class */ (function () {
    function Logger(name) {
        this.name = name;
    }
    Logger.prototype.setName = function (name) {
        this.name = name;
    };
    Logger.prototype.info = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgCyan)('INFO '), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
    };
    Logger.prototype.warn = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
    };
    Logger.prototype.error = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
    };
    return Logger;
}());
module.exports = { info: info, warn: warn, error: error, Logger: Logger };
