
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

var result1 = position.coords.latitude; 
var result2 = position.coords.longitude;


var result = result1  + 'e' +  result2 + 'f'  + location;

var result = "///" + result;

localStorage.setItem(location1, result);


}

function onError(error) {  }


var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });

}
