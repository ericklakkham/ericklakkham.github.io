/*
     Title: Quarantine Timer    
    Author: Erick Lakkham
      Date: 20240105
*/

//Define constants
//Miliseconds in a day
const mInDay = 86400000;
//Milisecods in an hour
const mInHour = 3600000;
//Milisecods in a minute
const mInMin = 60000;
//Milisecods in a second
const mInSec = 1000;
//End of the quarantine in miliseconds
const endDate = new Date (2024, 0, 10, 16).getTime ();

setInterval (main, 1);

//Display the time until the end date
function main () {
  /*Convert miliseconds to days, hours, minutes, seconds, and
    miliseconds*/
    var currentDate = new Date ().getTime ();
    var mils = endDate - currentDate;

    var days = Math.floor (mils / mInDay);
    mils -= days * mInDay;

    var hours = Math.floor (mils / mInHour);
    mils -= hours * mInHour;

    var mins = Math.floor (mils / mInMin);
    mils -= mins * mInMin;

    var secs = Math.floor (mils / mInSec);
    mils -= secs * mInSec;

    //Update the output variable
    var out = "";

    out += days + ":";
    out += ("00" + hours).substr (-2) + ":";
    out += ("00" + mins).substr (-2) + ":";
    out += ("00" + secs).substr (-2) + ":";
    out += ("000" + mils).substr (-3);

    //Add the output variable to index.html
    document.getElementById ("time").innerHTML = out;

    //Check if the end date has passed
    if (currentDate > endDate) {
        document.getElementById ("all").innerHTML = "<span id=\"time" +
        "\">Quarantine is over!</span>";
        clearInterval ();
    }
}