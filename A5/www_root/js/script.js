

/* Select event used*/
var search = document.getElementsByClassName("pg-banner");
let se  = document.createElement("div");
se.innerHTML += "</div><div class = 'search-bar'> <nav class='primary-nav'>\
        <p> Search for fligh to add</p>\
        <input id = 'input'>\
        <button onclick='Search()'> Find flights</button>\
    </nav></div>";


search[0].appendChild(se);

// add content to the html from the flight.js 
let list= [0,1,2,3,4,5,6,7,8];

function update(target ,list,flag){
  
   
        target[0].innerHTML = '';
        
        for(let i of list) {
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
}

/* Using for loop to add info from flight.js*/


function Search(){
    let search_element = document.getElementById("input");
    console.log(search_element.value);
    let s_value = search_element.value;
    let flt_name = [];
    for(let i=0; i<8; i++){
        if(FlightInfo[i].destination.toUpperCase() === s_value.toUpperCase()){
            flt_name.push(i);
        }
        if(FlightInfo[i].airline.toUpperCase() === s_value.toUpperCase()){
            flt_name.push(i);
        }
        if(FlightInfo[i].airport.toUpperCase() === s_value.toUpperCase()){
            flt_name.push(i);
        }
    }
    for(let i of flt_name){
        console.log(i);
    }
    update(target,flt_name,1);
}