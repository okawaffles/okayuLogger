"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.error = exports.warn = exports.info = void 0;
const chalk_1 = require("chalk");
function getTime() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();
    if (hr < 10)
        hr = parseInt(`0${hr}`);
    if (mn < 10)
        mn = parseInt(`0${mn}`);
    if (sc < 10)
        sc = parseInt(`0${sc}`);
    return `${hr}:${mn}:${sc}`;
}
/**
 * Log an info statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function info(name, text) {
    console.log(`${(0, chalk_1.blue)(`[${getTime()}]`)} ${(0, chalk_1.bgCyan)('INFO ')} [${(0, chalk_1.bold)(name)}] ${text}`);
}
exports.info = info;
/**
 * Log a warning statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function warn(name, text) {
    console.log(`${(0, chalk_1.blue)(`[${getTime()}]`)} ${(0, chalk_1.bgYellow)('WARN ')} [${(0, chalk_1.bold)(name)}] ${text}`);
}
exports.warn = warn;
/**
 * Log an error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
function error(name, text) {
    console.log(`${(0, chalk_1.blue)(`[${getTime()}]`)} ${(0, chalk_1.bgRed)('ERROR')} [${(0, chalk_1.bold)(name)}] ${text}`);
}
exports.error = error;
/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
 */
class Logger {
    constructor(name) {
        this.name = name;
    }
    /**
     * Set the process name for the logger class.
     * @param name The name of the process which will be logging
     */
    setName(name) {
        this.name = name;
    }
    /**
     * Log an info statement to the console
     * @param text The text that is being logged by the process
     */
    info(text) {
        console.log(`${(0, chalk_1.blue)(`[${getTime()}]`)} ${(0, chalk_1.bgCyan)('INFO ')} [${(0, chalk_1.bold)(this.name)}] ${text}`);
    }
    /**
     * Log a warning statement to the console
     * @param text The text that is being logged by the process
     */
    warn(text) {
        console.log(`${(0, chalk_1.blue)(`[${getTime()}]`)} ${(0, chalk_1.bgYellow)('WARN ')} [${(0, chalk_1.bold)(this.name)}] ${text}`);
    }
    /**
     * Log an error statement to the console
     * @param text The text that is being logged by the process
     */
    error(text) {
        console.log(`${(0, chalk_1.blue)(`[${getTime()}]`)} ${(0, chalk_1.bgRed)('ERROR')} [${(0, chalk_1.bold)(this.name)}] ${text}`);
    }
}
exports.Logger = Logger;
