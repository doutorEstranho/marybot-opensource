const fetch = require("node-fetch")
module.exports = async(tempo=1000,da=false) =>{
setInterval(()=>{
    let lista = [
    {url:"https://mary-twitch.soufofo.repl.co/"},
    {url:"https://mary.blacklight.net.br"},
    {url:"https://lavalink-repl.c0dezin.repl.co"},{url:"https://jogo-online-de-dinheiro.soufofo.repl.co/"}
]
lista.map(a=>{
    fetch(a.url).then(()=>{
        if(da){
     console.log(`Dando uptime pra ${a.url}`)
        }
    }).catch(e=>{
        console.log(`Erro ao dar uptime pro ${a.url}`)
    })
})
}, 10000)

}