"use strict";
exports.__esModule = true;
exports.Logger = exports.error = exports.warn = exports.info = void 0;
var chalk_1 = require("chalk");
var fs_1 = require("fs");
var path_1 = require("path");
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
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
  * @param name The name of the process that will be displayed on the console.
  * @param writeOut default: true | Should we write out to `latest.log`?
  * @param renameOld default: false | Should we rename the old `latest.log` and make a new one?
  * @since 2.1.0 Will *always* log to ./latest.log (unless disabled) and will rename latest-ol.log to have a timestamp if `renameOld` is `true`
 */
var Logger = /** @class */ (function () {
    function Logger(name, writeOut, renameOld) {
        if (writeOut === void 0) { writeOut = true; }
        if (renameOld === void 0) { renameOld = false; }
        this.writeOut = true;
        this.name = name;
        this.writeOut = writeOut;
        if (renameOld) {
            var now = new Date();
            // YYYY-MM-DD_HH-mm-SS
            var laststdoutfilename = "okayulogger-last-".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDay(), "_").concat(now.getHours(), "-").concat(now.getMinutes(), "-").concat(now.getSeconds(), ".log");
            try {
                (0, fs_1.renameSync)((0, path_1.join)(__dirname, 'latest.log'), (0, path_1.join)(__dirname, laststdoutfilename));
            }
            catch (err) {
                // pass
            }
            (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, 'latest.log'), "=> New log file created by OkayuLogger instance ".concat(this.name, ".\n"), 'utf-8');
        }
        (0, fs_1.appendFileSync)((0, path_1.join)(__dirname, 'latest.log'), "=> OkayuLogger instance (".concat(this.name, ") has hooked into this log.\n"), 'utf-8');
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
        if (this.writeOut) {
            (0, fs_1.appendFileSync)((0, path_1.join)(__dirname, 'latest.log'), "I [".concat(getTime(), "] (").concat(this.name, ") ").concat(text, "\n"));
        }
    };
    /**
     * Log a warning statement to the console
     * @param text The text that is being logged by the process
     */
    Logger.prototype.warn = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
        if (this.writeOut) {
            (0, fs_1.appendFileSync)((0, path_1.join)(__dirname, 'latest.log'), "W [".concat(getTime(), "] (").concat(this.name, ") ").concat(text, "\n"));
        }
    };
    /**
     * Log an error statement to the console
     * @param text The text that is being logged by the process
     */
    Logger.prototype.error = function (text) {
        console.log("".concat((0, chalk_1.blue)("[".concat(getTime(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(this.name), "] ").concat(text));
        if (this.writeOut) {
            (0, fs_1.appendFileSync)((0, path_1.join)(__dirname, 'latest.log'), "E [".concat(getTime(), "] (").concat(this.name, ") ").concat(text, "\n"));
        }
    };
    return Logger;
}());
exports.Logger = Logger;
