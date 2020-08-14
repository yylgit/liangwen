const {fork} = require('child_process');
const path = require('path');
fork(path.join(__dirname, './server.js'),['--inspect']);