const { info, warn, error } = require('./index.js');

info("example name", "Hello World! This is the info function!");
warn("example name", "Hello World! This is the warn function!");
error("example name", "Hello World! This is the error function!");


// Import the Logger class
const { Logger } = require('./index.js');

// Create a new Logger. We will name it
// "example name", and tell it to write out to a file,
// and rename latest.log if it already exists.
let L = new Logger("example name", true, true);

L.info("Hello World! This is the info function!");
L.warn("Hello World! This is the warn function!");
L.error("Hello World! This is the error function!");