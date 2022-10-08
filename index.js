const chalk = require('chalk');

function getTime() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();
    if (hr < 10) hr = `0${hr}`;
    if (mn < 10) mn = `0${mn}`;
    if (sc < 10) sc = `0${sc}`;
    return `${hr}:${mn}:${sc}`
}


/* Standalone Functions */

function info(name, text) {
    console.log(`${chalk.blue(`[${getTime()}]`)} ${chalk.bgCyan('INFO ')} [${chalk.bold(name)}] ${text}`);
}

function warn(name, text) {
    console.log(`${chalk.blue(`[${getTime()}]`)} ${chalk.bgYellow('WARN ')} [${chalk.bold(name)}] ${text}`);
}

function error(name, text) {
    console.log(`${chalk.blue(`[${getTime()}]`)} ${chalk.bgRed('ERROR')} [${chalk.bold(name)}] ${text}`);
}


/* Process Class */

class Logger {
    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    info(text) {
        console.log(`${chalk.blue(`[${getTime()}]`)} ${chalk.bgCyan('INFO ')} [${chalk.bold(this.name)}] ${text}`);
    }
    
    warn(text) {
        console.log(`${chalk.blue(`[${getTime()}]`)} ${chalk.bgYellow('WARN ')} [${chalk.bold(this.name)}] ${text}`);
    }
    
    error(text) {
        console.log(`${chalk.blue(`[${getTime()}]`)} ${chalk.bgRed('ERROR')} [${chalk.bold(this.name)}] ${text}`);
    }
}



module.exports = {info, warn, error, Logger};