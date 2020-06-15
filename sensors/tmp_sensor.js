const mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 

client.on('connect', function(){
  setInterval(function(){
    //scale from 22° to 32°
    var x= Math.floor(Math.random() * 10)+22; 
  
    client.publish('general/tmp',String(x) );}
    
    ,1000)

})
