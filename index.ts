import { blue, bgCyan, bgYellow, bgRed, bgBlue, bold, red, dim } from 'chalk';
import { appendFileSync, writeFileSync, renameSync } from 'fs';
import { join } from 'path';

function getTime() {
    let d = new Date();
    let hr: string = d.getHours().toString();
    let mn: string = d.getMinutes().toString();
    let sc: string = d.getSeconds().toString();
    if (parseInt(hr) < 10) hr = `0${hr}`;
    if (parseInt(mn) < 10) mn = `0${mn}`;
    if (parseInt(sc) < 10) sc = `0${sc}`;
    return `${hr}:${mn}:${sc}`;
}

/**
 * Log an info statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export function info(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgCyan('INFO ')} [${bold(name)}] ${text}`);
}

/**
 * Log a warning statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export function warn(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgYellow('WARN ')} [${bold(name)}] ${text}`);
}

/**
 * Log an error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export function error(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgRed('ERROR')} [${bold(name)}] ${text}`);
}

/**
 * Log a fatal error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export function fatal(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgRed(bold('FATAL'))} [${bold(name)}] ${red(text)}`);
}

/**
 * Log a debug statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export function debug(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgBlue('DEBUG')} [${name}] ${dim(text)}`);
}



/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
  * @param name The name of the process that will be displayed on the console.
 */
export class Logger {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * Set the process name for the logger class.
     * @param name The name of the process which will be logging 
     */
    setName(name: string) {
        this.name = name;
    }

    /**
     * Log an info statement to the console
     * @param text The text that is being logged by the process
     */
    info(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgCyan('INFO ')} [${bold(this.name)}] ${text}`);
    }

    /**
     * Log a warning statement to the console
     * @param text The text that is being logged by the process
     */
    warn(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgYellow('WARN ')} [${bold(this.name)}] ${text}`);
    }

    /**
     * Log an error statement to the console
     * @param text The text that is being logged by the process
     */
    error(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgRed('ERROR')} [${bold(this.name)}] ${text}`);
    }

    /**
    * Log a fatal error statement to the console
    * @param text The text that is being logged by the process
    */
    fatal(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgRed(bold('FATAL'))} [${bold(this.name)}] ${red(text)}`);
    }

    /**
     * Log a debug statement to the console
     * @param text The text that is being logged by the process
     */
    debug(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgBlue('DEBUG')} [${this.name}] ${dim(text)}`);
    }
}