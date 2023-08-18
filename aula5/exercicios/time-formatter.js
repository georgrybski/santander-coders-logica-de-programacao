function convertTo12Hour(timeString) {
    let [hours, minutes] = timeString.split(':').map(Number);

    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours === 12 ? 12 : hours % 12;

    let hoursString = hours.toString().padStart(2, '0');
    let minutesString = minutes.toString().padStart(2, '0');

    return `${hoursString}:${minutesString} ${period}`;
}

function printFormated12HourString(timeString) {
    console.log(convertTo12Hour(timeString));
}

printFormated12HourString("00:00");
printFormated12HourString("12:00");
printFormated12HourString("14:15");
printFormated12HourString("02:57");
printFormated12HourString("19:41");




