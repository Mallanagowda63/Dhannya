const { execSync } = require('child_process');
const path = require('path');

try {
  const tscPath = path.resolve(__dirname, '../node_modules/typescript/bin/tsc');
  console.log('Running tsc from:', tscPath);
  const output = execSync(`node "${tscPath}" --noEmit`, {
    cwd: path.resolve(__dirname, '..'),
    encoding: 'utf8',
  });
  console.log('TSC Check Passed Cleanly!');
  console.log(output);
} catch (err) {
  console.error('TSC Errors Found:');
  console.error(err.stdout || err.message);
}
