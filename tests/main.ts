import { execFileSync, ExecFileSyncOptions } from 'node:child_process';
import * as path from 'node:path';

test('test runs', () => {
  const np = process.execPath;
  const ip = path.join(__dirname, '..', 'build', 'main.js');
  const options: ExecFileSyncOptions = {
    env: process.env,
  };
  // eslint-disable-next-line no-console
  console.log(execFileSync(np, [ip], options).toString());
});
