
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();



var aluno = localStorage.getItem("cpf"); if (aluno == null) {} else {


setTimeout(function(){

    function onSuccess(position) {

var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result =  position.coords.latitude + '//' +  position.coords.longitude  + 'end'  + location;
localStorage.setItem(location1, result);

alert (result);
    } 

function onError(error) {
    
}

var options = {
  enableHighAccuracy: true

};

navigator.geolocation.getCurrentPosition(onSuccess, onSuccess, options);

    

}, 3000);

}}