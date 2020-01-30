
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();


var lastUpdateTime,
minFrequency = 10*1000,

var options = {
 timeout : 60*60*1000,
 maxAge: 0,
 enableHighAccuracy: true
};

function onSuccess(position) {

 var now = new Date();
    if(lastUpdateTime && now.getTime() - lastUpdateTime.getTime() < minFrequency){
      

var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result =  position.coords.latitude + '//' +  position.coords.longitude  + 'end'  + location;
localStorage.setItem(location1, result);

alert (result);


        return;
    }
    lastUpdateTime = now;

    } 

function onError(error) {
    
}


navigator.geolocation.watchPosition(onSuccess,onError,options);

}

