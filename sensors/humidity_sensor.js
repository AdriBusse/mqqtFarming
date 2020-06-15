const mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 

client.on('connect', function(){
  setInterval(function(){
    //scale from 75% to 95%
    var x= Math.floor(Math.random() * 20)+75; 
    
    client.publish('general/humidity',String(x) );
    }
    ,1000)

})
