const { MessageActionRow, MessageSelectMenu }
 = require('discord.js')
module.exports = {
  name:"testeselect",
  description:"Comando de teste",
  aliases:[],
  manu: false,
  run:run
}
async function run(client,message,args){
  let infos = new Set()
  let comandos = client.commands.map(e=>{
    
  })


//code do select aqui!
 

let row = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setPlaceholder('Escolha uma opção...') // O que aparecerá enquanto não escolher nada
    .setCustomId('select')
    .setDisabled(false) // Se for `true` o menu não poderá ser utilizado
    .setMinValues(0) // O mínimo de opções que o usuário deve escolher
    .setMaxValues(1) // O máximo de opções que o usuário deve escolher
    .addOptions([
      {
        label: 'Economia',
        emoji: '🔢',
        value: 'ec', // Isso poderá ser utilizado em futuros collectors
        description: 'Descrição da Opção 1'
      }
    ])
) 


message.channel.send({ components: [row], fetchReply: true })

let filter = (int) => int.isSelectMenu() && int.user.id === interaction.user.id
let collector = replied.createMessageComponentCollector({ filter, max: 1 })
collector.on('collect', async (collected) => {
  collected.deferUpdate() // isto é importante para prevenir bugs

  // **Para menu de seleção:
  let values = collected.values // uma Array com todas as opções selecionadas (depende o .setMinValues e .setMaxValues)

  if (values[0] === 'ec') interaction.editReply({ content: 'opção selecionada', components: [] })
  // `components: []` é usado para desabilitar o menu para não ser usado novamente
}

//help.js?? to fazendo assim tbm kkk 