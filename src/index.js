#!/usr/bin/env node

const execSh = require('exec-sh');

execSh('chmod +x ./src/scripts/startDB.sh && ./src/scripts/startDB.sh', { cwd: './' }, function (err) {
  if (err) {
    console.log('Exit code: ', err.code);
  }
});
