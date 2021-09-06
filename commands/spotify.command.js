module.exports = {
  name:"snake",
  description:"Jogue o famoso snake no Discord!",
  aliases:[],
  manu: false,
  run:run
}

async function run(client,message,args,erro){
const activity = message.member.presence.activities[0] === "Spotify"

message.reply({content: `${activity}`})
}