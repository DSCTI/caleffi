
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {

var aluno = localStorage.getItem("cpf");
var aula = localStorage.getItem("aula"); 

var geo = localStorage.getItem(aluno + "-location");

var result1 = position.coords.latitude;   
var result2 = position.coords.longitude;              
var speed = position.coords.speed;

if (speed != null) {

var speed1 = speed.charAt(0);
var speed2 = speed.charAt(1);
var speed3 = speed.charAt(2);
var speed4 = speed.charAt(3);

var speed = speed1 + speed2 + speed3 + speed4;

var now = new Date(Date.now());
var hours = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
var result = "s"+result1+"e"+result2+"e" + hours + "e" + speed + geo;

if (result2 != null) {
if (result1 != null) {
if (geo != null) {

localStorage.setItem(aluno + "-location-backup", result);
localStorage.setItem(aluno + "-location", result);

if (aula == null)  {location.href = "start.html";}
if (aluno == null) {location.href = "aluno.html";}

}}}

} 

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {  timeout: 3000, enableHighAccuracy: true  });

}
