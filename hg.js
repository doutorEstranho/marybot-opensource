const Discord = require('discord.js')
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_WEBHOOKS"]})
const { DiscordTogether } = require('discord-together');
const fs = require('fs')
const db = require('./db')
var cors = require('cors')
client.discordTogether = new DiscordTogether(client);
const uptime = require('./ligar')
const fetch = require('node-fetch')
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = db
const blapi = require('blacklightapi')

client.blapi = new blapi({
    token:process.env.api_oauth
});
console.dir(client.blapi)
const express = require('express')
const app = express()
app.use(cors())
const bodyPaser = bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
client.on("ready",()=>{

  console.warn("Logada na Maryyyyyyyyyyyyyyyyyyyyyy!")
  client.user.setActivity(`m.ajuda`,{
    type:"STREAMING",
    url: "https://www.twitch.tv/c0desaas"
  })
  app.post("/git/atualizacao/:key",async(req,res)=>{
    const verifysenha = require('./senhaverify')
    
    if(req.params.key != process.env.senhia) return res.json({cu:"r"})
   let msg = req.body.head_commit;
   
    res.send(req.body)
    let embed = new Discord.MessageEmbed()
    .setTitle("Fui atualizadah")
    .setDescription("AE CARA vê por favor se fiquei melhor?")
    .addField("Message",msg.message)
    .addField("Author:",msg.author.username)
    .addField("Url:",`[aqui](${msg.url})`)
let ojson = {embeds:[embed]}

  client.channels.cache.get("881213030954831882").send(ojson)
  })
    const cmd2 = fs.readdirSync(`./commands`).filter(go => go.endsWith('.js'));
     //  db.ref(`comandos`).set({})
app.listen(3000)
app.get("/",(req,res)=>{




  res.send(String("Tudo Azur"))
})

     for (const file of cmd2) {

        const CMDs = require(`./commands/${file}`);
      client.commands.set(CMDs.name, CMDs);
      console.log(`Comando ${CMDs.name} carregado 👍 ${file}`)

     }
     console.log("Todos os cmds foram carregados!")

  })
  

client.on("messageCreate",async(message)=>{
  
 // if(await db.createUser(message.author)) return;
  if(message.author.bot) return;
 
  if(message.channel.type == "DM")return;
 
  const prefixo = await db.getServerPrefix(message.guild) || "m.";
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
     if(await db.createUser(message.author)) return message.reply(`Olá ${message.author}! Bem vindo(a) na mary!\nPrefixo do server: ${prefixo}\nPrefixo global: m.\nAjuda: ${prefixo}ajuda`);
    message.reply(`Eae ${message.author}, meu prefixo no ${message.guild.name} é: \`${prefixo}\`, use \`${prefixo}ajuda\` pra ajuda!`)
  } else{
    if(!message.content.startsWith(prefixo)) return;
    const args = message.content.slice(prefixo.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const comando = client.commands.get(cmd) || client.commands.find(smd => smd.aliases && smd.aliases.includes(cmd));
        if(!comando) {
          return message.reply(`O comando **${cmd}** não existe, use **${prefixo}ajuda** pros meus comandos!`)
        }
        try{
          if(await db.createUser(message.author)) {
            throw new Error("PERSONAERROR\nParece que te conheci agora, já que se apresentou use o comando novamente, bipbop")
          }
          function erro(erro){
           message.reply("Um errselvagemdo apareceu! \n```js\n"+erro+"```")
          }
          
          comando.run(client,message,args,erro)
               //    erro(message.content)                                                                            
          client.channels.cache.get('880812071728578620').send({content: `O comando \`\`\`${cmd}\`\`\` foi executado por \`\`\`${message.author.username}\`\`\` \`\`\`(${message.author.id})** no servidor \`\`\`${message.guild.name}\`\`\`  \`\`\`(${message.guild.id})\`\`\` no canal \`\`\`${message.channel.name}\`\`\` \`\`\`(${message.channel.id})\`\`\` com as info \`\`\`${args.join(' ')}\`\`\``})
        } catch(e){
          e=String(e).replace("Error: ","")
          if(String(e).startsWith("PERSONAERROR\n")){}else{
          client.channels.cache.get('880812155291705395').send({content: `ocorreu um erro no comando ${cmd} veja se não há bugs!\nErro:\n\`\`\`js\n${e}\n\`\`\``})
          }
          message.reply(`<:marypaimonduvida:869632662577504256>| ${message.author}, algum erro aconteceu no comando ${cmd} pode ser erro do codigo ou meu erro\n se começar com PERSONAERROR verifique a sintaxe correta do comando!!\nErro:\n\`\`\`js\n${e}\n\`\`\``)
        }
  }
})



client.on("guildCreate",s=>{
  db.guildAdd(s)
  client.channels.cache.get('880812058373947392').send({content: `Fui adicionada em uma guild **${s.name}**  **(${s.id})** `})
})
client.on("guildDelete",s=>{
  client.channels.cache.get('880812058373947392').send({content: `Fui removida de uma guild **${s.name}** **(${s.id})** `})
  db.guildDelete(s)
})