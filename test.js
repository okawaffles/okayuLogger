const L = require('./index.js');

L.info('test', 'Info works!');
L.warn('test', 'Warn works!');
L.error('test', 'Error works!');

let C = new L.Logger('testClass');

C.info("Class Info works!");
C.warn("Class Warn works!");
C.error("Class Error works!");