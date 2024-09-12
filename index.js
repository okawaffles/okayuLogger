"use strict";
exports.__esModule = true;
exports.Logger = exports.debug = exports.fatal = exports.error = exports.warn = exports.info = void 0;
var chalk_1 = require("chalk");
function getTime() {
    var d = new Date();
    var hr = d.getHours().toString();
    var mn = d.getMinutes().toString();
    var sc = d.getSeconds().toString();
    if (parseInt(hr) < 10)
        hr = "0".concat(hr);
    if (parseInt(mn) < 10)
        mn = "0".concat(mn);
    if (parseInt(sc) < 10)
        sc = "0".concat(sc);
    return "".concat(hr, ":").concat(mn, ":").concat(sc);
}
/**
 * Log an info statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function info(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgCyan)('INFO '), " [").concat((0, chalk_1.bold)(name), "] ").concat(text));
}
exports.info = info;
/**
 * Log a warning statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function warn(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(name), "] ").concat(text));
}
exports.warn = warn;
/**
 * Log an error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function error(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(name), "] ").concat(text));
}
exports.error = error;
/**
 * Log a fatal error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function fatal(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)((0, chalk_1.bold)('FATAL')), " [").concat((0, chalk_1.bold)(name), "] ").concat((0, chalk_1.red)(text)));
}
exports.fatal = fatal;
/**
 * Log a debug statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function debug(name, text) {
    console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgBlue)('DEBUG'), " [").concat(name, "] ").concat((0, chalk_1.dim)(text)));
}
exports.debug = debug;
/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
  * @param name The name of the process that will be displayed on the console.
 */
var Logger = /** @class */ (function () {
    function Logger(name) {
        this.name = name;
    }
    /**
     * Set the process name for the logger class.
     * @param name The name of the process which will be logging
     */
    Logger.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * Log an info statement to the console
     * @param text The text that is being logged by the process
     */
    Logger.prototype.info = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgCyan)('INFO '), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
    };
    /**
     * Log a warning statement to the console
     * @param text The text that is being logged by the process
     */
    Logger.prototype.warn = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
    };
    /**
     * Log an error statement to the console
     * @param text The text that is being logged by the process
     */
    Logger.prototype.error = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
    };
    /**
    * Log a fatal error statement to the console
    * @param text The text that is being logged by the process
    */
    Logger.prototype.fatal = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)((0, chalk_1.bold)('FATAL')), " [").concat((0, chalk_1.bold)(this.name), "] ").concat((0, chalk_1.red)(text)));
    };
    /**
     * Log a debug statement to the console
     * @param text The text that is being logged by the process
     */
    Logger.prototype.debug = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgBlue)('DEBUG'), " [").concat(this.name, "] ").concat((0, chalk_1.dim)(text)));
    };
    return Logger;
}());
exports.Logger = Logger;
