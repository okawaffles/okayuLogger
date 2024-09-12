const { info, warn, error, fatal, debug } = require('./index.js');

info("example name", "Hello World! This is the info function!");
warn("example name", "Hello World! This is the warn function!");
error("example name", "Hello World! This is the error function!");
fatal("example name", "Hello World! This is the fatal error function!");
debug("example name", "Hello World! This is the debug function!");


// Import the Logger class
const { Logger } = require('./index.js');

// Create a new Logger. We will name it "example class"
let L = new Logger("example class");

L.info("Hello World! This is the info function!");
L.warn("Hello World! This is the warn function!");
L.error("Hello World! This is the error function!");
L.fatal("Hello World! This is the fatal error function!");
L.debug("Hello World! This is the debug function!");