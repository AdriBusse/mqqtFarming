const mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')


client.on('connect',()=>{
  client.subscribe('humCh');


})
client.on('message', function (topic, message) {
    //console.log(message.toString())
    client.publish("general/pump",message)


})