//desabilita botão voltar
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

//faz a checagem do GPS no primeiro acesso e exibe diálogo de permissão

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

function onSuccess(position) {  }

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}
