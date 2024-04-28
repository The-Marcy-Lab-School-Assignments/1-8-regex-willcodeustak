const helloWorldRegex = (str) => {
  const onlyHelloWorld = /hello\s+world/gi;
  return onlyHelloWorld.test(str);
};
const hasAVowel = (str) => {
  const trueIfAtLeast1Vowel = /[aeiou]/gi;

  return trueIfAtLeast1Vowel.test(str);
};

const hasCatsOrDogs = (str) => {
  const trueIfCatsOrDogs = /cats|dogs/gi;
  return trueIfCatsOrDogs.test(str);
};

const hasVowelStart = (str) => {
  const trueIfStartsWithVowel = /^[aeiou]/gi;
  return trueIfStartsWithVowel.test(str);
};

const hasPunctuationEnd = (str) => {
  const trueIfEndWithPeriod = /[.!?]$/g;
  return trueIfEndWithPeriod.test(str);
};

const hasNothingOrDigits = (str) => {
  const emptyOrDigits = /^(|\d+)$/g;
  return emptyOrDigits.test(str);
};

const hasNoFlippers = (str) => {};

const isValidEmail = (str) => {};

const isValidPhoneNumber = (str) => {};

const matchAllNumbers = (str) => {};

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
