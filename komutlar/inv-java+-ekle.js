const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.reply('`davet` eklemeye yeterli yetkiniz bulunmuyor! :/')
  
let user = message.mentions.users.first()
let sayı = args[1]
let sayısı = await db.fetch(`inviter_${user}`)   
let kontrol = await db.fetch(`bonus_${user}`)

if(!user) return message.channel.send('davet eklenecek kullanıcıyı belirtmelisin.')
if(!sayı) return message.channel.send('eklenecek davet miktarını belirtmelisin!')
if(!kontrol) {
  db.set(`bonus_${user}`, 0)
}  
  

db.add(`bonus_${user.id}`, sayı)
  
 
  let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Başarılı!`,message.author.avatarURL)
.setColor('RANDOM')
  .setDescription(user + ' in davet miktarına, **'+sayı +'** Eklendi!')
message.channel.send(embed3) 




    };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ekle',
  description: 'ekle', 
  usage: 'ekle'
};
