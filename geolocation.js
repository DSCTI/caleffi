
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {

var location2 = localStorage.getItem(location1);
var result1 = position.coords.latitude;  if (result1 == null) { var result1 = "0"; }
var result2 = position.coords.longitude; if (result2 == null) { var result2 = "0"; }
var speed = position.coords.speed; if (speed == null) { var speed = "1"; }  if (speed == "0") { var speed = "1"; }

var now = new Date(Date.now());
var hours = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

var aula = localStorage.getItem("aula"); 
if (aula == null) {} else {
var result = "s"+result1+"e"+result2+"e" + hours + "e" + speed + location2;
localStorage.setItem(location1, result); }

}

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}
