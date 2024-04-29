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

const hasNoFlippers = (str) => {
  const noFlippableLetters = /[BCcDEHIKOoXxl]/;
  //uses the logical NOT operator to change the standard
  //.test of returning true instead to false.
  return !noFlippableLetters.test(str);
};

const isValidEmail = (str) => {
  const onlyTheseConditionsAcceptedForEmail =
    //first instance- allows A-Za-z letters
    //allows numbers 0-9 and symbols
    // + @     then allows more strict but same concept A-Za-z0-9
    // + the period before com or org
    //finalizing with . with org or com  a-zA-Z {2,}
    //{2} specifies a-zA-Z must occur 2 or more times.
    /^[A-Za-z0-9._!#$&'*+-/=?^_{|}~]+@[A-Za-z0-9]+\.[a-zA-Z]{2,}$/g;
  /*originally had % included but test examples highlighted it as cause for error 
therefore was removed.
*/
  return onlyTheseConditionsAcceptedForEmail.test(str);
};

const isValidPhoneNumber = (str) => {
  const validPhoneNumber = /^(?:\(\d{3}\) |\d{3}[- .])\d{3}[- .]\d{4}$/;
  ///^[-\s().][0-9]{3}$/g;
  return validPhoneNumber.test(str);
};

const matchAllNumbers = (str) => {
  // Define the regular expression pattern to match numbers
  const regex = /\d+/g;

  // Use the match method to find all occurrences of numbers in the string
  const found = str.match(regex);

  // If no numbers are found, return an empty array; otherwise, convert each number to a string
  return found ? found.map((num) => num.toString()) : [];
};

const matchAllNumbersAsNumbers = (str) => {
  const regex = /\d+/g;
  const found = str.match(regex);
  return found ? found.map((num) => Number(num)) : [];
};

const matchAllWords = (str) => {
  const regex = /[a-zA-Z']+/g; // Match one or more letters or apostrophes
  const found = str.match(regex);
  return found ? found : [];
};

const replaceAllNumbers = (str) => {
  const allNumbers = /\d+/gi; // Match one or more digits

  return str.replace(allNumbers, "???");
};

const fixFileName = (str) => {
  // Replace consecutive whitespace characters with a single underscore
  return str.replace(/\s+/g, "_");
};

const nameRedacter = (str) => {
  // Match all-capital words except for "I" or "A"
  const allNames = /\b(?!(?:I|A)\b)[A-Z]+\b/g;
  return str.replace(allNames, "REDACTED");
};

const camelToSnakeCase = (str) => {
  // Use replace method with regular expression to match capital letters
  // and replacer function to convert them to snake case
  return str.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
};

/*
The replace method is used on the input string str.
The regular expression /[A-Z]/g matches all capital letters in the string.
The replacer function (match) => '_' + match.toLowerCase() is called for each matched capital letter.
Within the replacer function, each capital letter is converted to lowercase using toLowerCase() and prefixed with an underscore.
This function converts a camelCase string to snake_case by inserting underscores before each capital letter and converting them to lowercase.
*/
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
