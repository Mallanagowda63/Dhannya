// esbuild's own postinstall step (node_modules/esbuild/install.js,
// maybeOptimizePackage) hard-links the platform-native binary directly over
// node_modules/esbuild/bin/esbuild on every OS except Windows, as a perf
// optimization -- so on Linux/Mac that file is a raw compiled binary and
// must be executed directly, while on Windows it remains the original
// "#!/usr/bin/env node" JS wrapper and must be run through node. Running it
// via `node <path>` unconditionally (as if it were always JS) is what broke
// the Render (Linux) build with "SyntaxError: Invalid or unexpected token"
// on the ELF binary's magic bytes.
const { execFileSync } = require('node:child_process');

const esbuildBin = require.resolve('esbuild/bin/esbuild');
const args = process.argv.slice(2);

if (process.platform === 'win32') {
  execFileSync(process.execPath, [esbuildBin, ...args], { stdio: 'inherit' });
} else {
  execFileSync(esbuildBin, args, { stdio: 'inherit' });
}
