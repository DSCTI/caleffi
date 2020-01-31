alert ("loaded");
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

alert ("ready");

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {
var location = localStorage.getItem(location1);

var result1 = position.coords.latitude; 
var result2 = position.coords.longitude;

var date = new Date();

var hora = date.toLocaleDateString('pt-BR');

var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

var result = "s"+result1+"e"+result2+"e"+hour+min+sec+location;

localStorage.setItem(location1, result);


alert ("ok");

}

function onError(error) {  }

var watchID2 = navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });

window.setInterval(function(){

var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });

}, 25000);


}
