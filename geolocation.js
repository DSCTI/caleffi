
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {
var location2 = localStorage.getItem(location1);

var result1 = position.coords.latitude; 
var result2 = position.coords.longitude;

var dt = new Date();
var time = dt.getHours() + dt.getMinutes() + dt.getSeconds();

var result = "s"+result1+"e"+result2+"e" + time + location2;

localStorage.setItem(location1, result);

}

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}
