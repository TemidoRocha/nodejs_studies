#!/usr/bin/env node
/**
 *  in order to run from any part of the PC we need to insert the following line at the top of the starting file
 * #!/usr/bin/env node
 * 
 * at the package json:
 * "bin": {
    "countdown": "countdown.js"
  },
 * 
 * after we need to link the command to the node global
 * "npm link" at the folder of the project
 * essentialTraining\countdownClock
 * 
 * to remove it we do "npm unlink"
 */

const parseArgs = require('minimist');
const { stdout: log } = require('single-line-log');
const Timer = require('tiny-timer');
const { time } = parseArgs(process.argv);

if (!time) {
  throw new Error('--time is required');
}

if (!parseInt(time)) {
  throw new Error('--time must be a number');
}

const count = parseInt(time);
let message = '';

for (let i = 0; i < count; i++) {
  message += '*';
}

const timer = new Timer({ interval: 1000 });

timer.on('tick', () => {
  log(message);
  message = message.slice(1);
});

timer.start(count * 1000);
