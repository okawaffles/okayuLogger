// Logs an info string to the console.
export function info(name: string, text: string): void;

// Logs a warn string to the console.
export function warn(name: string, text: string): void;

// Logs an error string to the console.
export function error(name: string, text: string): void;


/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
  */
export class Logger {
    constructor(name: string);
    name: string

    // Modifies the name of the class.
    setName(name: string): void;

    // Logs an info string with the name specified in the class.
    info(text: string): void;

    // Logs a warn string with the name specified in the class.
    warn(text: string): void;

    // Logs an error string with the name specified in the class.
    error(text: string): void;
}