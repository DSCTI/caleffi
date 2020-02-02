
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {



var result1 = position.coords.latitude;   if (result1 == null) {var result1 = "1";} 
var result2 = position.coords.longitude;  if (result2 == null) {var result2 = "1";}
var speed = position.coords.speed;        if (speed == null) {var speed = "1";}
var speed = format(speed);                 

alert (result1);
alert (result2);
alert (speed);

} 

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {  timeout: 3000, enableHighAccuracy: true  });

}
