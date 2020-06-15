const mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')


client.on('connect',()=>{
  client.subscribe('lightCh');


})
client.on('message', function (topic, message) {
    //console.log(message.toString())
    client.publish("general/bulb",message)


})