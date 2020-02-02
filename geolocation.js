
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var aula = localStorage.getItem("aula"); 

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {

var geo = localStorage.getItem(aluno + "-location");

var result1 = position.coords.latitude;   
var result2 = position.coords.longitude;  
var speed = position.coords.speed;              

var now = new Date(Date.now());
var hours = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
var result = "s"+result1+"e"+result2+"e" + hours + "e" + speed + geo;

if (speed != null) {
if (result2 != null) {
if (result1 != null) {
if (result != null) {
if (geo != null) {
if (aula != null) {

localStorage.setItem(aluno + "-location", result);

}}}}}}

} 

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {  timeout: 3000, enableHighAccuracy: true  });

}
