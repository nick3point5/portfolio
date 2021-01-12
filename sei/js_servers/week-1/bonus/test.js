const current = new Date(+(new Date).toISOString().substring(0,4)+1+(new Date).toISOString().substring(4))

// console.log(depart.toString());
console.log(convertUTCDateToLocalDate(current));
console.log((current));

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}