
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();

var aluno = localStorage.getItem("cpf"); if (aluno == null) {} else {
var aula = localStorage.getItem("aula"); if (aula == null) {} else {
var aula = localStorage.getItem("aula"); if (aula == 0) {} else {

    function onSuccess(position) {

var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result = position.coords.latitude  + '//' +  position.coords.longitude + 'end'  + location;
localStorage.setItem(location1, result);
alert (result);
    } 

  function onError(error) {
  alert ("Erro ao obter a localização, autorize o uso do GPS nas configurações do aplicativo.");

    }

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 10000 });

    }
      

} } }