function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}


function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return reversedString === normalizedString;
}

function printNumber(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const parsedChar = parseInt(string[i], 10);

    if (!Number.isNaN(parsedChar)) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

checkStringLength('мурмурмяумяу', 20);
isPalindrome('топот');
printNumber('22330e234ete');
