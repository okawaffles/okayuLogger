export function info(name: string, text: string): void;
export function warn(name: string, text: string): void;
export function error(name: string, text: string): void;

// i have no idea whether this is right or not, but it doesn't give me any errors, so:
export class Logger{
    constructor(name: string);
    name: string
    setName(name: string): void;
    info(text: string): void;
    warn(text: string): void;
    error(text: string): void;
}