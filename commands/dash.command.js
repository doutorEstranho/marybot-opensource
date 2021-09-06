const { MessageActionRow, MessageButton} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name:"dashboard",
  description:"Me configure!",
  aliases:["dash","painel"],
  run:run,
  manu:true
}
async function run(client,message,args){
  
const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://mary.blacklight.net.br/dashboard')
					.setLabel('Painel!')
					.setStyle('LINK')
          .setEmoji('881667858030002266'),
			);
const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Painel de controle')
    .setDescription('Opa parece que você quer me configurar ne? então clique no botão abaixo para isso!')
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL());
    message.reply({embeds: [embed], components: [row]})
}