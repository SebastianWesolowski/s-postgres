#!/usr/bin/env node

const execSh = require('exec-sh');

execSh('yarn run start:dev:cli', { cwd: './' }, function (err) {
  if (err) {
    console.log('Exit code: ', err.code);
  }
});
