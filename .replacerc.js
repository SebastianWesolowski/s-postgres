const replace = require('replace-in-file');

const envPhase = {
  files: './dist/**/*',
  from: 'source .env',
  to: 'source ../../.env',
  countMatches: true,
};
const srcPhase = {
  files: './dist/**/*',
  from: /\.\/src\//g,
  to: './dist/',
  countMatches: true,
};
const cwdPhase = {
  files: './dist/**/*',
  from: "{ cwd: './' }",
  to: " {cwd: './node_modules/s-postgres/' }",
  countMatches: true,
};

replace(envPhase)
  .then((resultsPhase) => {
    console.log('Replacement env phase results:', resultsPhase);
    return replace(srcPhase);
  })
  .then((resultsSrcPhase) => {
    console.log('Replacement src phase results:', resultsSrcPhase);
    return replace(cwdPhase);
  })
  .then((resultsSrcPhase) => {
    console.log('Replacement src phase results:', resultsSrcPhase);
    return replace(cwdPhase);
  })
  .then((resultsCwdPhase) => {
    console.log('Replacement cwd phase results:', resultsCwdPhase);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
