
function findHere(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(redirect);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
};

function redirect(position) {
    console.log(`/${position.coords.latitude},${position.coords.longitude}`); 
    window.location = `/${position.coords.latitude},${position.coords.longitude}`;
};

function search(){
    var q = $("#location-value").val();
    console.log(q);
    if(q.trim().length>0)
        window.location = `/search/${q}`;
}

$( document ).ready(function() {
    console.log( "ready!" );
});

$("#here").on("click", findHere);
$("#location").on("click", search);