
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

window.plugins.insomnia.keepAwake();


var lastUpdateTime,
minFrequency = 10*1000,
watchOptions = {
    timeout : 60*60*1000,
    maxAge: 0,
    enableHighAccuracy: true
};

function on_success(position){
    var now = new Date();
    if(lastUpdateTime && now.getTime() - lastUpdateTime.getTime() < minFrequency){
        return;
    }
    lastUpdateTime = now;

   var location1 = aluno + "-location";
var location = localStorage.getItem(location1);

var result =  position.coords.latitude + '//' +  position.coords.longitude  + 'end'  + location;
localStorage.setItem(location1, result);

alert (result);

}

navigator.geolocation.watchPosition(on_success,on_error,watchOptions);


}
