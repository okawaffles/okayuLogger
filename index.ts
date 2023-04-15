import { blue, bgCyan, bgYellow, bgRed, bold } from 'chalk';

function getTime() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();
    if (hr < 10) hr = parseInt(`0${hr}`);
    if (mn < 10) mn = parseInt(`0${mn}`);
    if (sc < 10) sc = parseInt(`0${sc}`);
    return `${hr}:${mn}:${sc}`
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
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
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
}