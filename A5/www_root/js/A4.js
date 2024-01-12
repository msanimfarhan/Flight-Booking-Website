/* 
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */



/* Select event used*/

function select(btn_no) {
    var p = document.createElement("p");
    p.innerHTML = "Flight " + FlightInfo[btn_no].code + " to " + FlightInfo[btn_no].destination + " added";
    var flight = document.getElementsByClassName("flights-selection-bag");
    flight[0].appendChild(p);
}

/* Using for loop to add info from flight.js*/
var target = document.getElementsByClassName("container");

    for (var i = 0; i < 8; i++) {
        var p = document.createElement("div");
        p.innerHTML += "<div id = 'div1' class = 'flight-info'>" +
            "<b >" + FlightInfo[i].destination + "</b>" +
            "<br> <small> Non-Stop, " + FlightInfo[i].time + "min <br> Depart time: " + FlightInfo[i].departTime + " </small>  " +
            "<div> <ul class ='flight-availability-info'> \
            <li> Airline: "+ FlightInfo[i].airline + " </li>\
            <li> Airport: "+ FlightInfo[i].airport + " </li>\
            <li> Details: "+ FlightInfo[i].info + " </li>\
            <ul>\
     </div>"
            + "<br> <button id = " +
            i + " align= 'center' onclick='select(id)'> Select </button> </div>";
        target[0].appendChild(p);
        console.log(p);
        
    }

