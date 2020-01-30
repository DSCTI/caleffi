document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

    function onSuccess(position) {

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result =  position.coords.latitude    + '//' +  position.coords.longitude     + '#'  + location;
localStorage.setItem(location1, result);
alert (result);
    }


    function onError(error) {
  
    }


    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });

    }
       