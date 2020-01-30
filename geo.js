

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();

function onSuccess(position) {

var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result =  position.coords.latitude + '//' +  position.coords.longitude  + 'end'  + location;
localStorage.setItem(location1, result);

alert (result);

    } 

function onError(error) {
    
}

var options = {
 timeout : 60*60*1000,
 maxAge: 0,
 enableHighAccuracy: true
};


navigator.geolocation.watchPosition(onSuccess,onError,options);

}

