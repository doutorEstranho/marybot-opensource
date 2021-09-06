const {MessageEmbed}= require("discord.js")
module.exports = {
  name:"webperfil",
  description:"Veja o perfil do seu amigo online com mais infos!!!",
  aliases:["wp"],
  run:run
}
async function run(client,message,args,erro){
  message.channel.sendTyping();
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  let url = {
    "url":"https://mary.blacklight.net.br/perfil"
  }
  url.url = url.url+"/"+user.id;
  message.reply({
    content:`A url do perfil de ${user} é: ${url.url}`
  })
}