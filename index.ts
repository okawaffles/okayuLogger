import { blue, bgCyan, bgYellow, bgRed, bold } from 'chalk';
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
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
  * @param name The name of the process that will be displayed on the console.
  * @param writeOut default: true | Should we write out to `latest.log`?
  * @param renameOld default: false | Should we rename the old `latest.log` and make a new one?
  * @since 2.1.0 Will *always* log to ./latest.log (unless disabled) and will rename latest-ol.log to have a timestamp if `renameOld` is `true`
 */
export class Logger {
    name: string;
    private writeOut = true;

    constructor(name: string, writeOut: boolean = true, renameOld: boolean = false) {
        this.name = name;
        this.writeOut = writeOut;

        if (renameOld) {
            let now = new Date();
            // YYYY-MM-DD_HH-mm-SS
            let laststdoutfilename = `okayulogger-last-${now.getFullYear()}-${now.getMonth()}-${now.getDay()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.log`
            
            try {
                renameSync(join(__dirname, 'latest.log'), join(__dirname, laststdoutfilename));
            } catch (err: any) {
                // pass
            }

            writeFileSync(join(__dirname, 'latest.log'), `=> New log file created by OkayuLogger instance ${this.name}.\n`, 'utf-8');
        }

        appendFileSync(join(__dirname, 'latest.log'), `=> OkayuLogger instance (${this.name}) has hooked into this log.\n`, 'utf-8');
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
        
        if (this.writeOut) {
            appendFileSync(join(__dirname, 'latest.log'), `I [${getTime()}] (${this.name}) ${text}\n`);
        }
    }
    
    /**
     * Log a warning statement to the console
     * @param text The text that is being logged by the process
     */
    warn(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgYellow('WARN ')} [${bold(this.name)}] ${text}`);

        if (this.writeOut) {
            appendFileSync(join(__dirname, 'latest.log'), `W [${getTime()}] (${this.name}) ${text}\n`);
        }
    }
    
    /**
     * Log an error statement to the console
     * @param text The text that is being logged by the process
     */
    error(text: string) {
        console.log(`${blue(`[${getTime()}]`)} ${bgRed('ERROR')} [${bold(this.name)}] ${text}`);

        if (this.writeOut) {
            appendFileSync(join(__dirname, 'latest.log'), `E [${getTime()}] (${this.name}) ${text}\n`);
        }
    }
}