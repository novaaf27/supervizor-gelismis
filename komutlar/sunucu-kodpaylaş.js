const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
  
  if (!message.guild.id === '600312544938164247') return message.reply('Bu komut sadece destek sunucuma özel!')
        var hata = new Discord.RichEmbed()   
.setTitle(':warning: **Hata!**')
.setDescription('Bu komut sadece **"KOD PAYLAŞIMCILARI" özeldir!**')
      .setColor('RED') 
  
        
        if (!message.member.roles.has('622228702612422677')) return message.channel.sendEmbed(hata)

  let yazı = args.slice(1, 1000, args[1]).join(' ');  
  if (!args[0]) {
           var hata = new Discord.RichEmbed()   
.setTitle(':warning: **Hata!**')
.setDescription('Kanal İsmini Belirtmelisin!')
      .setColor('RED')  
    message.channel.sendEmbed(hata)
           return
  }    
 
  if (!yazı) {
            var hata = new Discord.RichEmbed()   
.setTitle(':warning: **Hata!**')
.setDescription('Gönderilecek mesajı belirtmelisin!')
      .setColor('RED')     
    message.channel.sendEmbed(hata)
return
  }
 message.guild.createChannel(`${args[0]}`, "text").then(c => { 
  let category = message.guild.channels.find('name', '✅| Kod Paylaşımları')
  c.send(yazı) 
  c.setParent(category.id)
 let id = message.member.id;     
   let pseviye = db.fetch(`pxp_${id}`)
   
 if (!pseviye) {
   db.set(`pxp_${id}`, 0) 
   
   
 }
   if(pseviye = 500) {
var b = new Discord.RichEmbed() 
     .setTitle('**Selam Değerli,**' + message.member.user.username + '**')
.setDescription(message.member.user.username + ' 500 Paylaşımcı seviyesini geçtin.. Hizmetin için teşekkür ediyor **Süper Paylaşımcı** Rolünü iyi günlerde kullanmanı diliyoruz :))')
.addField('**Paylaşımcı Seviyesi**', pseviye)
      .setColor('GREEN')     
 message.channel.sendEmbed(b)    
message.member.addRole('622317341639966730')
     return
   }
   
   var b = new Discord.RichEmbed()   
.setTitle('**Başarılı!**')
.setDescription(message.member.user.username + ' Kod Paylaşımcısı,Komutunu insanlar ile paylaştığın için teşekkür ederiz.')
.addField('**Paylaşımcı Seviyesi**', pseviye)
      .setColor('GREEN')     
 message.channel.sendEmbed(b)
   
  db.add(`pxp_${id}`, 50) 
   
 })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodpaylaş',
  description: 'kod paylaşmak',
  usage: 'kodpaylaş'
};
