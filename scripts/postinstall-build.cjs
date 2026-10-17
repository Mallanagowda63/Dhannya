// Hostinger's Express preset runs `npm install` and then starts the entry file
// (dist/server.cjs) with no separate build step, so production installs build
// the app here. Local/dev installs (NODE_ENV unset) skip this.
const { execSync } = require('node:child_process');

if (process.env.NODE_ENV === 'production') {
  execSync('npm run build', { stdio: 'inherit' });
}
