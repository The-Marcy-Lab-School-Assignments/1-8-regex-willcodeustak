const swapAllCases = (str) => {
  return str.replace(/[a-zA-Z]/g, (match) => {
    /** FEEDBACK: This is not passing because the question is asking you to only use toUpperCase() and toLowerCase() only once and here you use the uppercase twice. What can you replace it with to still check for uppercase without using toUpperCase()? */
    return match === match.toUpperCase()
      ? match.toLowerCase()
      : match.toUpperCase();
  });
};
//cannot figure this out
module.exports = {
  swapAllCases,
};
