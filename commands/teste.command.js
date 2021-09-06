const Discord = require('discord.js')
module.exports = {
  name:"teste",
  description:"Comando de teste",
  aliases:["test","tst","debug"],
  run:run
}
async function run(client,message,args){
  message.channel.sendTyping();
  let pings =1// args[0]|| 10
  let ping = Number(pings)
  if(isNaN(ping)) return;
 message.channel.send({content:"MaryDebug"}).then(a=>{
   setTimeout(async()=>{
message.reply({content:`${ping} pings sendo executados...`}).then(a=>{
  for(let i=0;i<=ping;i++){
    setTimeout(()=>{
      message.reply({content:`Ping num #${i}\nMaryPing: ${client.ws.ping}`}).then(a=>{
        setTimeout(()=>{
          a.delete()
        },2000)
        //a.delete()
      })
    },200)
  }
})
   },2000)
 })
 
}