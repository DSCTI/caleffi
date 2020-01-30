
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();



// call this once
setupWatch(3000);

// sets up the interval at the specified frequency
function setupWatch(freq) {
    // global var here so it can be cleared on logout (or whenever).
    activeWatch = setInterval(watchLocation, freq);
}

// this is what gets called on the interval.
function watchLocation() {
    var gcp = navigator.geolocation.getCurrentPosition(
            updateUserLoc, onLocationError, {
                enableHighAccuracy: true
            });


    // console.log(gcp);

}

// do something with the results

function updateUserLoc(position) {


var location = {
    lat : position.coords.latitude,
    lng : position.coords.longitude
};


var location = localStorage.getItem(location1);

var result =  location.lat + '//' + location.lng  + 'end'  + location;
localStorage.setItem(location1, result);

alert (result);

}

// stop watching

function logout() {
    clearInterval(activeWatch);
}



}
