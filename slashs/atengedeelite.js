module.exports = async (interaction,args,db,client) =>{
  try {
    let name = ('Felipe neto');

    let avatar = {avatar: 'https://cdn.discordapp.com/attachments/864575682633007126/869599803523334264/nelipe_neto.jpg'} //se quiser colocar um avatar pro webhook
    let canalid = interaction.channel_id
          console.log(interaction)
          let message ={
                  channel: client.client.channels.cache.get(canalid)
          }
    message.channel.createWebhook(name, avatar).then(w => { //aqui ele ira criar o webhook com o nome e avatar 
      w.send('atenge de elite <@534883744927055952>').then((
      ) => w.delete()) //aqui o bot ira deletar o webhook apos a mensagem ser enviada

    });

    } catch (err) {
        message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**') //caso o bot n tenha permissão de criar o webhook
    }
}