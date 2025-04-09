#!/usr/bin/env node

import execSh from 'exec-sh';

execSh(
  'chmod +x ./src/scripts/startDB.sh && ./src/scripts/startDB.sh',
  { cwd: './' },
  (error: Error | null, _stdout: string, _stderr: string) => {
    if (error) {
      console.log('Exit code: ', (error as Error & { code?: number }).code);
    }
  }
);
