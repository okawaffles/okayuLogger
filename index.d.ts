/**
 * Log an info statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export declare function info(name: string, text: string): void;
/**
 * Log a warning statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export declare function warn(name: string, text: string): void;
/**
 * Log an error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export declare function error(name: string, text: string): void;
/**
 * Log a fatal error statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export declare function fatal(name: string, text: string): void;
/**
 * Log a debug statement to the console
 * @param name The name of the process which is logging
 * @param text The text that is being logged by the process
 */
export declare function debug(name: string, text: string): void;
/**
  * A logger class that always keeps its name.
  * Useful for multi-process/task logging.
  * @param name The name of the process that will be displayed on the console.
 */
export declare class Logger {
    name: string;
    constructor(name: string);
    /**
     * Set the process name for the logger class.
     * @param name The name of the process which will be logging
     */
    setName(name: string): void;
    /**
     * Log an info statement to the console
     * @param text The text that is being logged by the process
     */
    info(text: string): void;
    /**
     * Log a warning statement to the console
     * @param text The text that is being logged by the process
     */
    warn(text: string): void;
    /**
     * Log an error statement to the console
     * @param text The text that is being logged by the process
     */
    error(text: string): void;
    /**
    * Log a fatal error statement to the console
    * @param text The text that is being logged by the process
    */
    fatal(text: string): void;
    /**
     * Log a debug statement to the console
     * @param text The text that is being logged by the process
     */
    debug(text: string): void;
}
//# sourceMappingURL=index.d.ts.map