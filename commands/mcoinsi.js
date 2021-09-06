const { MessageActionRow, MessageButton} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name:"mcoinsi",
  description:"infos",
  aliases:[],
  run:run,
  manu:false
}
async function run(client,message,args){
  let db = client.db
db.all(message.channel)
}//