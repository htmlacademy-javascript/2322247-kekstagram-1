const isLongerOrShort = (string, maxLength) => {
  return string.length <= maxLength;
}

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}

const extractNumbers = (newString) => {
  const string = newString.toString();
  let number = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i))))
      number += string.at(i);
  }
  return parseInt(number);
}

const stringAdd = (string, minLength, add) => {
  while (string.length < minLength) {
    let remainingLength = minLength - string.length;
    string = add.slice(0, remainingLength) + string;
  }
  return string;
};


