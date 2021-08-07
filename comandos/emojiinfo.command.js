const Discord = require('discord.js')
const moment = require('moment')
moment.locale("pt-BR");
module.exports = {
    name: "emojiinfo",
    async run(client, message, args) {
        let emojiName = args.join(" ");
        let emoji = message.guild.emojis.cache.get(args[0]) || message.guild.emojis.cache.find(emoji => emoji.name === `${emojiName}`) 
        if (!args[0]) return message.channel.send("Por favor, me dê o nome ou id do emoji")
        if (!emoji) return message.channel.send("Por favor, me dê um nome ou id **valido**")
        let xd;
        if(emoji.animated) xd = "Sim"
        if(!emoji.animated) xd = 'Não'
        let embed = new Discord.MessageEmbed()

            .addField("Nome", `${emoji.name}`)
            .addField("Id do emoji", `${emoji.id}`)
            .addField("Emoji", `${emoji}`)
            .addField("Criado em", `${moment(emoji.createdTimestamp).format('LT')} ${moment(emoji.createdTimestamp).format('LL')} ${moment(emoji.createdTimestamp).fromNow()}`)
            .addField("Servidor", message.guild.name)
            .addField("Animado?", xd)
            .setThumbnail(emoji.url)
            .setColor("0edceb")
            .addField("Formato", `\`<:${emoji.name}:${emoji.id}>\``)
            .addField("URL", `[clique aqui](${emoji.url})`)

        message.channel.send(embed)
    }
}