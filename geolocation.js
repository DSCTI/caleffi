
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var geo1 = aluno + "-location";
var aula = localStorage.getItem("aula"); 

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {

var geo2 = localStorage.getItem(geo1);
var result1 = position.coords.latitude;  
var result2 = position.coords.longitude; 
var speed = position.coords.speed; 
var speed = (speed.substring(0, 2));

var now = new Date(Date.now());
var hours = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

if (aula    == null) {} else {
if (result1 == null) {} else {
if (result2 == null) {} else {
if (speed   == null) {} else {

var result = "s"+result1+"e"+result2+"e" + hours + "e" + speed + geo2;

if (result  == null) {} else {

localStorage.setItem(geo1, result);

}}}}}


}

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}
