const { MessageActionRow, MessageButton } = require("discord.js")
const { DiscordTogether } = require('discord-together');
module.exports = {
  name:"snake",
  description:"Jogue o famoso snake no Discord!",
  aliases:[],
  run:run
}
const initGame = require('snakemeg');

async function run(client,message,args,erro){
  
const snakeGame = new initGame({
    title: 'Snake Game',
    color: "GREEN",
    field: "⬛",
    fruit: "🥦",
    animal: "😷",
    thumbnail: message.author.avatarURL(),
    timestamp: false,
    gameOverTitle: "Game Over"
});
 async function snake(){
  return;
  }
}