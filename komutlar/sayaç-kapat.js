const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu     kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let kontrol = await db.fetch(`ssayı_${message.guild.id}`)
  
  if(!kontrol) return message.channel.send('Görünüşe Göre Sayaç Zaten Kapalı Dostum :)')
  
  db.delete(`sskanal_${message.guild.id}`)  
  db.delete(`ssayı_${message.guild.id}`)  
   db.delete(`sayachgmsj_${message.guild.id}`)  
   db.delete(`sayacbbmsj_${message.guild.id}`)  
  message.channel.send('Sayaç **Bu Sunucuda** Devredışı Bırakılmıştır.')
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sayaçkapat'], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç-kapat',
  description: 'taslak', 
  usage: 'sayaçkapat'
};
