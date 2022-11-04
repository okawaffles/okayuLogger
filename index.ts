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

function info(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgCyan('INFO ')} [${bold(name)}] ${text}`);
}

function warn(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgYellow('WARN ')} [${bold(name)}] ${text}`);
}

function error(name: string, text: string) {
    console.log(`${blue(`[${getTime()}]`)} ${bgRed('ERROR')} [${bold(name)}] ${text}`);
}

/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
 */
class Logger {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    setName(name: string) {
        this.name = name;
    }

    info(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgCyan('INFO ')} [${bold(this.name)}] ${text}`);
    }
    
    warn(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgYellow('WARN ')} [${bold(this.name)}] ${text}`);
    }
    
    error(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgRed('ERROR')} [${bold(this.name)}] ${text}`);
    }
}



module.exports = {info, warn, error, Logger};