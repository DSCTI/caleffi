
document.addEventListener("deviceready", onDeviceReady, false);

var aula = localStorage.getItem("aula");
var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

if (aula == null) {} else {
if (aula == 0) {} else {

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {
var location2 = localStorage.getItem(location1);

var result1 = position.coords.latitude; 
var result2 = position.coords.longitude;
var speed = position.coords.speed;

var now = new Date(Date.now());
var hours = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

var result = "s"+result1+"e"+result2+"e" + hours + "e" + speed + location2;

localStorage.setItem(location1, result);

}

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}

} }