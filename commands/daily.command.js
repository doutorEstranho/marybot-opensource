const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  name:"daily",
  description:"Pegue o seu premio diario!",
  aliases:["diario","dail"],
  run:run,
  manu:false
}
async function run(client,message,args){
message.channel.sendTyping();

const {db} = client;

const aaa = await db.daily(message.author);
if(aaa){
  let a = new Date();
  let b = 24-a.getHours();
  let c = 60-a.getMinutes();
  let d = 60-a.getSeconds();
  if(b < 10)b = `0${b}`;
  if(c < 10)c = `0${c}`;
  if(d < 10)d = `0${d}`;
  
  message.lol =`Que pena, você já pegou seu daily hoje, espere mais ${b} horas,${c} minutos e ${d} segundos pra pegar o daily novamente!`;
} else{
  
  message.lol =`Pegue seus mcoins diarios clicando no botão!\n(Pegue todos os dias pra você ficar cheio(a) dos mcoins!)`
}
const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Daily!')
					.setStyle('LINK')
          .setURL('https://mary.blacklight.net.br/daily')
          .setEmoji('869723446353997874'),
			);
      
message.reply({content: `${message.lol}`, components: [row]})
}
