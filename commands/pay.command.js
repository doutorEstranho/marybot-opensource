const { MessageEmbed,MessageButton,MessageActionRow }= require("discord.js")
module.exports = {
  name:"pay",
  description:"Pague seu melhor amigo com mcoins!",
  aliases:["pagar","pix","payall"],
  manu: false,
  run:run
}
async function run(client,message,args,erro){

  const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]);
  const user1 = message.author;
  const valor = args[1]
  const valorr = Number(valor);

  if(!user) {
  erro("membro invalido")
  } else{ 
if(user.id != client.user.id && user.bot) {
  erro("hmmmmmm aldeao foda?\n pq ta me pagando, ta mais você é humilde!")
}else{
  if(!valor) {
    erro("Valor que quer pagar inexistente, faça como esse exemplo:\nm.pay <@user> <valor>")
  }else{
  if(isNaN(valorr)) {
erro("O valor que tu quer tem que ser numero!")
  } else{
    if(user.id == user1.id) {
      erro("você não pode te pagar, bobinho!!")
    } else{
    let saldo = await db.getSaldo(message.author)
    if(valor>=saldo){
      erro("você não pode pagar oque não tem bobinho!!")
    } else{
      let saldoOutroMembro = await db.getSaldo(user)
      let mensagem = "{member1}, O(a) {member} quer te pagar {mcoins} mcoins, se você aceitar clicando em Aceitar1 e o {member} clicar em Aceitar2 você ficará com {mcoins.totality} mcoins! e {member} com {member.mcoins} mcoins\nLEMBRANDO: o {member} e {member1} precisam pegar o daily(m.daily) pra pagar!\nLeia as regras em: https://mary.blacklight.net.br/terms"
      saldo=await db.getSaldo(message.author)
      for(let i = 0;i<=1000;i++){
        mensagem=mensagem.replace("{member1}",user)
        mensagem=mensagem.replace("{member}",message.author)
        mensagem=mensagem.replace("{mcoins}",valor)
        mensagem=mensagem.replace("{mcoins.totality}",saldoOutroMembro+valorr)
        mensagem=mensagem.replace("{member.mcoins}",saldo-valor)
      
      }
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('ac1')
					.setLabel('Aceitar1')
          
          .setEmoji('869723446353997874')
					.setStyle('DANGER'),
          new MessageButton()
					.setCustomId('ac2')
					.setLabel('Aceitar2')
          .setEmoji('869723446353997874')
					.setStyle('DANGER'),
          
			);
   let a = await message.reply({
        content:mensagem,
        components: [row]
      })
        let msg = a;
        let dailys ={
          author:await db.daily(message.author),
          user
        }
        let confirm = user.id === "531997885760536577" || user.id === "700157765053841438" || user.id === "534883744927055952" || message.author.id === "531997885760536577" || message.author.id === "700157765053841438" || message.author.id === "534883744927055952"
        let confirm1 = user.id === "531997885760536577" || user.id === "" || user.id === "534883744927055952"
        if(!dailys.author || !dailys.user){
        if(!dailys.author && !confirm){
          msg.edit({content:"> Pegue o daily pra pagar pessoas!"})
        } else{
          
        if(!dailys.user && !confirm){
          msg.edit({content:`> Peça pra ${user} pegar o daily!`})
        }
        }
        } else{
      
      const row1 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('reajiu4')
					.setLabel('Aceitar1')
					.setStyle('SUCCESS')
          .setEmoji('869723446353997874'),
          new MessageButton()
					.setCustomId('reajiu3')
					.setLabel('Aceitar2')
					.setStyle('SUCCESS')
          
          .setEmoji('869723446353997874')

          
			);
      const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('ac1')
					.setLabel('Aceitar1')
          
          .setEmoji('869723446353997874')
					.setStyle('DANGER'),
          new MessageButton()
					.setCustomId('reajiu2')
					.setLabel('Aceitar2')
					.setStyle('SUCCESS')
          
          .setEmoji('869723446353997874'),

          
			);
            const row3 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('reajiu1')
					.setLabel('Aceitar1')
					.setStyle('DANGER')
          .setEmoji('869723446353997874'),
          new MessageButton()
					.setCustomId('ac2')
					.setLabel('Aceitar2')
					.setStyle('DANGER')
          .setEmoji('869723446353997874'),

          
			);
      
        msg.edit({ content: String(mensagem), components: [row]}).then(a=>{

          if(valor < 1){
                  const row4 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('ac1')
					.setLabel('Aceitar1')
					.setStyle('DANGER')
          .setDisabled(true)
          .setEmoji('869723446353997874'),
          new MessageButton()
					.setCustomId('ac2')
					.setLabel('Aceitar2')
					.setStyle('DANGER')
          .setDisabled(true)
          .setEmoji('869723446353997874'),

          
			);
            a.edit({content:"XD não bote quantidade negativa :)", components: [row4]})
          }else{
          let membro1clicou = false;
          let membro2clicou = false;
          let recebeu = false
          let filtro1 = i => i.customId === 'ac1' && i.user.id === user.id;
  let filtro2 = i => i.customId === 'ac2' && i.user.id === message.author.id;
if(user.id == client.user.id){
  membro2clicou=true;
  msg.reply({content: `Eu aceitei a transferencia :)`})
} else{
 if(confirm1){
  membro2clicou=true;
  msg.reply({content: `Meu dev ${user} aceitou :>\n(Ele não clicou no btn, isso foi apenas o codigo que executa`})
} 
}
const coletor1 = msg.createMessageComponentCollector({filter:filtro2, time: 120000 });
const coletor2 = msg.createMessageComponentCollector({ filter:filtro1, time:120000 });
async function receber(){
  client.db.addMcoins(user,valor)
  client.db.removeMcoins(message.author,valor)
  msg.edit({ content: String(mensagem), components: [row1]})
}
coletor1.on('collect', async i => {
  await i.deferUpdate();
  msg.reply({content: `${message.author} Aceitou a transferencia`})// A MSG É A DO BOT
  if(!membro2clicou){
    msg.edit({ content: String(mensagem), components: [row2]})
  } 
   membro1clicou=true;
    if(membro1clicou == true && membro2clicou == true){
      if(recebeu) return;
      recebeu=true
receber()

msg.reply({content:`Prontinho, ${message.author} deu ${valor} mcoins pra ${user}`})
    
  }
})
coletor2.on('collect', async i => {
  await i.deferUpdate();

  
    msg.reply(`${user} Aceitou a transação`)
    if(!membro1clicou){
    msg.edit({ content: String(mensagem), components: [row3]})
  } 
    membro2clicou=true;
    if(membro1clicou == true && membro2clicou == true){
       if(recebeu) return;
      recebeu=true
receber()

msg.reply({content:`Pronto, ${message.author} deu ${valor} mcoins pra ${user}`})
    
  }
})
          }
        })
        }
      
    }
    }
  }
  }
}
}

}