const mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 

client.on('connect', function(){
  setInterval(function(){
    //scale from 700lux to 1600lux
    var x= Math.floor(Math.random() * 900)+700; 

    client.publish('general/light',String(x) );
    }
    ,1000)

})
