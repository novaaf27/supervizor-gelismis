const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
 if(args[0] === "kapalı") {
  let embed = new Discord.RichEmbed()
  .setTitle(':uyar: Acil Durum Koruması Devre Dışı!')
  .setDescription('Acil Durum ayarları devre dışı bırakıldı.Bu durum saldırı anında engel koymayacaktır.')
  .addBlankField()
  .addField('Artık Devredışı:', '<a:iptal:626445972620443648> Webhook Koruması \n <a:iptal:626445972620443648> Ban Sınırı \n <a:iptal:626445972620443648> Kanal Silme Ban \n <a:iptal:626445972620443648> Kanal Açma Ban \n <a:iptal:626445972620443648> Spam Ban \n <a:iptal:626445972620443648> Sohbet Cooldown')
  .setColor('RED')
  message.channel.send(embed)
 db.set(`aktif_${message.guild.id}`, 'Kapalı').then(i => {
 })
 }
  
  if(args[0] === "açık") {
   let embed = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> Acil Durum Koruması Aktif!')
  .setDescription('Acil Durum Devreye Alındı!..Sunucu koruma moduna alınıyor..')
  .addBlankField()
  .addField('Artık Aktif!:', '<a:basarl:626445944258560012> Webhook Koruması \n <a:basarl:626445944258560012> Ban Sınırı \n <a:basarl:626445944258560012> Kanal Silme Ban \n <a:basarl:626445944258560012> Kanal Açma Ban \n <a:basarl:626445944258560012> Spam Ban \n <a:basarl:626445944258560012> Sohbet Cooldown')
  .setColor('RED')
  message.channel.send(embed)   
    
     db.set(`aktif_${message.guild.id}`, 'Açık').then(i => {
 })
  }
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'saldırı',
  description: 'taslak', 
  usage: 'saldırı'
};
