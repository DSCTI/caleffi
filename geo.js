
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() { window.plugins.insomnia.keepAwake(); }

var aluno = localStorage.getItem("cpf"); if (aluno == null) {} else {
var aula = localStorage.getItem("aula"); if (aula == null) {} else {

function onDeviceReady() {



    function onSuccess(position) {


var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result =  position.coords.latitude    + '//' +  position.coords.longitude     + '#'  + location;
localStorage.setItem(location1, result);

    } 


    function onError(error) {
  
    }


    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });

    }
      

} }