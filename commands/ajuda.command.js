const Discord = require('discord.js')
module.exports = {
  name:"ajuda",
  description:"Veja meus comandos!",
  aliases:["help","?"],
  run:run,
  manu:false
}
async function run(client,message,args){
const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Meus comandos')
    .setDescription(`Aqui está:\n${


client.commands.map(e=>`${e.name}\n`).join(" ")


    }`)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL());
    
    message.reply({embeds: [embed]})
}