const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
  name:"doggo",
  description:"MAIS QUE FOFO VEI",
  aliases:["auau","dog"],
  run:run,
  manu:true
}
async function run(client,message,args){
message.reply('MANU!')
}/*
const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('maisum')
					.setLabel('Mais um!')
					.setStyle('SUCCESS')
          .setEmoji('880630325775069266'),
			);


      const { blapi } = client
  blapi.doggo().then(doguin=>{
    let url = doguin;
    let embed = new MessageEmbed()
    .setTitle("Own doggo foof")
    .setImage(url)
    .setDescription("QUE FOFINHO VÉI")
    .setFooter(`${message.author.username}`, message.author.avatarURL());
    //vamo colocar um botão escrito mais um!
    message.reply({embeds: [embed], components: [row]})
    client.on('interactionCreate', async interaction => {
if(interaction.member.guild.id != message.guild.id ||interaction.member.user.id != message.author.id) return;
    const wait = require('util').promisify(setTimeout);
	if (!interaction.isButton()) return;
  await interaction.deferUpdate();
		await wait(2000);
    
		await interaction.editReply({ embeds: [embed], components: [row]});
  
    })
  })
  

}*/