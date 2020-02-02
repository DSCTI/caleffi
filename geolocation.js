
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {


alert ("sucess!");



} 

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {  timeout: 3000, enableHighAccuracy: true  });

}
