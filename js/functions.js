const isLongerOrShort = (string, maxLength) => string.length <= maxLength;

isLongerOrShort('проверяемая строка', 20);
isLongerOrShort('проверяемая строка', 18);
isLongerOrShort('проверяемая строка', 10);

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

const extractNumbers = (newString) => {
  const string = newString.toString();
  let number = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      number += string.at(i);
    }
  }
  return parseInt(number, 10);
};

extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);


const stringAdd = (string, minLength, add) => {
  while (string.length < minLength) {
    const remainingLength = minLength - string.length;
    string = add.slice(0, remainingLength) + string;
  }
  return string;
};

stringAdd('1', 2, '0');
stringAdd('1', 4, '0');
stringAdd('q', 4, 'werty');
stringAdd('q', 4, 'we');
stringAdd('qwerty', 4, '0');
