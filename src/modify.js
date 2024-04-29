const swapAllCases = (str) => {
  return str.replace(/[a-zA-Z]/g, (match) => {
    return match === match.toUpperCase()
      ? match.toLowerCase()
      : match.toUpperCase();
  });
};
//cannot figure this out
module.exports = {
  swapAllCases,
};
