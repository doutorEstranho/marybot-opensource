const Discord = require('discord.js')
module.exports = {
  name:"perfil",
  description:"veja as informações de alguém!",
  aliases:["profile"],
  run:run,
  manu:false
}
async function run(client,message,args){
  message.channel.sendTyping();
 const Canvas = require('canvas')

   const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  const info = await db.perfilMember(user);
  if(!info) return message.reply("Perfil não existe");


const Jimp = require('jimp')
const foto = await Jimp.read(user.avatarURL({format:"png"})||"https://cdn.discordapp.com/embed/avatars/2.png?size=2048")
Jimp.read(`./imgs/perfil.png`).then(async i => {
                Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(async font => {
                 foto.resize(100,100)
                i.print(font, 10,10, `${user.username}`, 263)
                const final = await i.getBufferAsync(Jimp.MIME_PNG)
                i.composite(foto,10,30);
                const attachment = new Discord.MessageAttachment(final, `User${user.id}Profile${user.tag}.png`)
                const aa = attachment.attachment


		message.reply({content: `Caso esteja procurando mais informações use o comando m.webperfil ${user}`, files: [attachment] });
})
})
}
