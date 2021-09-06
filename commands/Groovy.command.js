const { MessageEmbed, MessageActionRow, MessageButton }= require("discord.js")
module.exports = {
  name:"Groovy",
  description:"Homenagem ao Groovy",
   aliases:["groovy"],
  run:run,
  manu:false
}
async function run(client,message,args,erro){
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('f')
					.setLabel('F!')
					.setStyle('SUCCESS'),
			);
      client.on('interactionCreate', async interaction => {
if(interaction.member.guild.id != message.guild.id ||interaction.member.user.id != message.author.id) return;
    const wait = require('util').promisify(setTimeout);
	if (!interaction.isButton()) return;
  await interaction.deferUpdate();
		await wait(3000);
    if(interaction[0].id == "f"){
		await interaction.editReply({content: "F"});

    }
message.reply({content: "F Groovy deposite seu F", components: [row]})
})
}