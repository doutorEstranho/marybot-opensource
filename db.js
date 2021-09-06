let cooldown = 30;
let set = new Set()
let set1 = new Set()
let nome = "aaaaa"
async function connect(){

    if(set.has(nome))
        return global.connection;
        set.add(nome)
      setTimeout(()=>{
        set.delete(nome)
      //  if(global.connection)console.dir(global.connection)
      },cooldown*1000)
      
let env = process.env
    const mysql = require("mysql2/promise");
    
    const connection = await mysql.createConnection("mysql://"+env.mysql_name+":"+env.mysql_pass+"@"+env.mysql_host+":"+env.mysql_port+"/"+env.mysql_name+"");
    console.log("Conectou no MySQL!");
    setTimeout(async()=>{
     
        connect().then(async ax=>{
       await connection.close()
         // console.log("Fechou o mysql antigo")
        })
        
      },(cooldown)*1000)
    global.connection = connection;
    connection.xiuaua = connection.promise
    return connection;
    
}
async function connects(){

    if(set1.has(nome))
        return global.connectionz;
        set1.add(nome)
      setTimeout(()=>{
        set1.delete(nome)
      },cooldown*1000)
let env = process.env
    const mysql = require("mysql2");
    
    const connection = await mysql.createConnection("mysql://"+env.mysql_name+":"+env.mysql_pass+"@"+env.mysql_host+":"+env.mysql_port+"/"+env.mysql_name+"");
   // console.log("Conectou no MySQL!");
    
    global.connectionz = connection;
  // connection.xiuaua = connection.promise
    return connection;
    
}

connect()
async function all(canal){
  let conexao = await connects()
  conexao.query("SELECT * FROM members",async (err,tables)=>{
    if(err) return;
    let quantidademcoins=0
   tables.map(async e=>{
     quantidademcoins=quantidademcoins+(e.saldo)
   })
canal.send(`Mais de ${quantidademcoins} mcoins estão circulando AGORA na mary, e ${tables.length} pessoas estão registrados`)
  })

  
}

async function daily(member){
  let id = member.id;
  const connection = await connect();
  let sql = "SELECT * FROM members WHERE id=?";
    let a = await connection.query(sql,[id])
let b = a[0];
const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();

let membro = b[0]
if(membro.ultimodailydia == dia && membro.ultimodailymes == mes) {
  return true
}else{
  return false
}
}
async function serverAdd(server){
  let id = server.id
  let sql =  "INSERT INTO guilds(id) VALUES (?)"
  let connection = await connect();
 return await  connection.query(sql,[id])
}
async function guildDelete(server){
  let id = server.id;
  let sql = 'DELETE FROM `guilds` WHERE id=?';
  let connection = await connect();
   return await  connection.query(sql,[id])
}
async function getServerPrefix(server){
  let id = server.id;
  let prefix = "m."
  let sql = "SELECT `number`, `id`, `premium`, `prefix` FROM `guilds` WHERE id=?";
  let connection = await connect();
  let a = await connection.query(sql,[id])
  let [row] = await a[0]
 // console.dir(a)
 if(!row) return String("m.");
  prefix = row.prefix;
  return await String(prefix);
}
async function verifyUser({id}){
  try{
  let sql = "SELECT * FROM `members` WHERE id=?"
  let connection = await connect();
  let query = await connection.query(sql,[id])
  let [rows] = query[0]
  return await rows
  }catch(e){
    return true;
  }
}
async function createUser(member){
  let id = member.id;
  let verify = await verifyUser({id});
  if(verify) return;
  const connection = await connect()
  let data = new Date();
let ts = data.getTime();
  let sql = "INSERT INTO members(id,iniciomary) VALUES(?,?)"
  let sql2 = "INSERT INTO badges(userid) VALUES(?)"
  let aaa = await connection.query(sql,[id,ts])
let aaaa = await connection.query(sql2,[id])
  return true;
}
async function getSaldo(member){
  let {id}=member;
  let saldo = 0
  let verify = await verifyUser({id});
 // if(!verify) return null;
  let sql  = "SELECT * FROM `members` WHERE id=?";
  let sql1 = [id];
  const connection = await connect()
  let query = await connection.query(sql,sql1);
  let [rows] = query[0];
  if(!rows) return null;
  saldo=rows.saldo
return await saldo;
}
async function perfilMember(member){
  let {id} = member;
  let sql = "SELECT * FROM members WHERE id=?";
  let vars = [id];
  let connection = await connect()
  let query = await connection.query(sql,vars)
  let [rows] = query[0];
  if(!rows) return;
  return rows;
}
async function dailyDisc(member,quantidade,client){
  let {id} = member
  const sqls = {
    one:"SELECT * FROM members WHERE id=?",
    two:"UPDATE members SET saldo=?,`ultimodailydia`=?,`ultimodailymes`=? WHERE id=?"
  }
  let connection = await connect();
  let saldo = await getSaldo(member)///
  let saldodps = saldo+Number(quantidade)
  let a = await connection.query(sqls.one,[id])
let b = a[0];
const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
if(!verifyUser({id})){
  let aaa = {code:201, message:"Pegue novamente o daily!"}
  return aaa;
}else{
let membro = b[0]
if(!membro)  {
   let data = new Date();
let ts = data.getTime();
  let sql = "INSERT INTO members(id,iniciomary) VALUES(?,?)"
  let sql2 = "INSERT INTO badges(userid) VALUES(?)"
  let aaa = await connection.query(sql,[id,ts])
let aaaa = await connection.query(sql2,[id])
   let aaaaa = {code:201, message:"Pegue novamente o daily! pq sim"}
  return aaaaa;
  }
}
}
async function addMcoins(membro,quantidade){
  const connection = await connect()
  var {id} = membro;
  let saldo = await getSaldo(membro)
let dps = Number(saldo)+Number(quantidade);
var sql = "UPDATE members SET saldo=? WHERE id=?";
let aaaa  =await connection.query(sql,[dps,id]);
if(aaaa){
  return true;
}else{
  return false;
}
}
async function removeMcoins(membro,quantidade){
  const connection = await connect()
  var {id} = membro;
  let saldo = await getSaldo(membro)
let dps = Number(saldo)-Number(quantidade);
var sql = "UPDATE members SET saldo=? WHERE id=?";
let aaaa  =await connection.query(sql,[dps,id]);
if(aaaa){
  return true;
}else{
  return false;
}
}
async function verifyStaff({id}){
  return await true
}
module.exports = {guildAdd:serverAdd,guildDelete,getServerPrefix,verifyUser,createUser,getSaldo,perfilMember,daily,dailyDisc,all,addMcoins,removeMcoins,verifyStaff}
