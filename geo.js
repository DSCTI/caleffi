
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();





var oldlong = "";
var oldlat = "";

navigator.geolocation.watchPosition(onGpsChangeSuccess,onGpsError,{
   maximumAge: 10000, 
   enableHighAccuracy: false, 
   timeout: 15000 
 }
);

var onGpsChangeSuccess = function(){
    //Watch was triggered...

    if(oldlong != position.coords.longitude && oldlat!=position.coords.longitude){

        //Changes detected
        oldlong = position.coords.longitude;
        oldlat = position.coords.latitude; 
      

var location = localStorage.getItem(location1);
var result =  oldlong + '//' + oldlat  + 'end'  + location;
localStorage.setItem(location1, result);

alert (result);

   }else{
    alert ("sem mudanças");
   }
}







}
