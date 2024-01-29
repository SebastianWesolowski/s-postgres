const replace = require("replace-in-file");

const envPhase = {
  files: "./dist/scripts/**",
  from: "source .env",
  to: "source ../../.env",
  countMatches: true,
};
const envUtil = {
  files: "./dist/scripts/**",
  from: "./src/scripts",
  to: "./dist/scripts",
  countMatches: true,
};

replace(envPhase)
  .then((resultsPhase) => {
    console.log("Replacement envPhase results:", resultsPhase);
    return replace(envUtil); // Musisz zwrócić obietnicę z replace(envUtil)
  })
  .then((resultsUtil) => {
    console.log("Replacement envUtil results:", resultsUtil);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
