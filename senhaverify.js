module.exports = async(senha)=>{
  var crypto = require('crypto')
var shasum = crypto.createHash('sha1')
shasum.update(process.env.senhia)
let a = await shasum.digest('hex')
return await senha==a;
}