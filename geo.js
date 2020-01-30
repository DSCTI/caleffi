
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();

 document.addEventListener("backbutton", function (e) {
        e.preventDefault();
    }, false );



    function onSuccess(position) {
      


var location = localStorage.getItem(location1);

var result1 = position.coords.latitude;  result1.replace("-", "m");
var result2 = position.coords.longitude;  result2.replace("-", "m");


var result = result1  + ' ' +  result2 + 'e'  + location;


localStorage.setItem(location1, result);


}

function onError(error) {  }


var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });

}
