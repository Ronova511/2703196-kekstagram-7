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

const parseTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingWithinWorkingDay = (workStart, workEnd, meetingStart, duration) => {
  const workStartMinutes = parseTimeToMinutes(workStart);
  const workEndMinutes = parseTimeToMinutes(workEnd);
  const meetingStartMinutes = parseTimeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

isMeetingWithinWorkingDay('08:00', '17:30', '14:00', 90);
checkStringLength('мурмурмяумяу', 20);
isPalindrome('топот');
printNumber('22330e234ete');
