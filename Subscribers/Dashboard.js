const mqtt = require('mqtt');
var moment = require('moment');
var client  = mqtt.connect('mqtt://test.mosquitto.org')


client.on('connect',()=>{
  client.subscribe('general/#');


})

var tmp=0, light=0, hum= 0;
var fan=0, bulb=0, pump=0;


client.on('message', function (topic, message) {
  if(topic=== "general/tmp"){
      tmp= message;
      if(tmp>=30){
        //to hot -> turn on
      client.publish('tmpCh',"1" )
    };
    
    if(tmp<= 25){
        //to cold -> turn off
      client.publish('tmpCh',"0" )};
    
  }
  if(topic==="general/light"){
      light= message;
      if(light>=1500){
        //to much light -> turn off
      client.publish('lightCh',"0" )
    };  
    if(light<= 800){
        //to less light-> turn on
      client.publish('lightCh',"1" )};
    
  }if(topic==="general/humidity"){
      hum= message;
      if(hum>=90){
        //to much huminity -> turn off
      client.publish('humCh',"0" )
    };    
    if(hum<= 80){
        //to less huminity-> turn on
      client.publish('humCh',"1" )
    };
  }if(topic === "general/Fan"){
      fan= message;
  }if(topic === "general/bulb"){
      bulb=message;
  }if(topic === "general/pump"){
      pump= message;
  }


  // message is Buffer
  //console.log(topic)
  //console.log(topic+": "+message.toString())
  //console.log("topic is: "+topic)
})
setInterval(()=>{
    console.log('_______________________')
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    console.log(`tmp: ${tmp} ||lux: ${light}  ||humidity: ${hum}`)
    console.log(`Fan: ${fan} ||Bulb: ${bulb} ||Pump: ${pump}`)
    console.log('_______________________')

},1000)
/*function convertTopic(topic){
    switch(topic){
        case "general/tmp":
            return "Tmp";
            break;
        case "general/light":
            return "lux";
            break;
        case "general/humidity":
            return "humidity";
            break;
        default:
            return "unknown"
    }
    
}*/




