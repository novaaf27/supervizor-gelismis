const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = async(client, message, args) => { 

     if (talkedRecently.has(message.author.id)) {
      message.delete();
       return message.channel.send('Cooldowna yakalandın!');
 
     } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 15000);
    }
  
  let user = message.mentions.users.first()
 if(!user) return message.channel.send('Lütfen bir kullanıcı belirt.')
  let kontrol3 = await db.fetch(`paylasimci_${message.guild.id}`, user.id)   

  
  let kontrol = new Discord.RichEmbed()
  .setTitle('<a:google:635846373052383243> Yetkiniz Kontrol Ediliyor')
  .setColor('BLUE')
  .setDescription('Sunucu veri tabanında yetkiniz kontrol ediliyor lütfen bekleyiniz..')
  
message.channel.send(kontrol).then(x => {
 setTimeout(() => {
if(message.author.id !== "419214688061227009") {
  
    let kontrol = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> Yetki Hatası')
  .setDescription('Sunucu Veri Tabanında paylaşımcı eklebilmeyeniz için gerekli iznininizi bulamadım.')
  .setColor('RED')
    x.edit(kontrol) 
return
}
  if(kontrol3) {
     let kontrol22 = new Discord.RichEmbed()
  .setTitle('<a:basarl:626445944258560012> Yetki Kontrolü')
  .setDescription('Sunucu Veri Tabanında paylaşımcı Silebilmeniz için gerekli izinleri buldum.. '+user+' in veri tabanından kod paylaşım yetkisini siliyorum.')
  .setColor('GREEN')
    x.edit(kontrol22)        
   db.delete(`paylasimci_${message.guild.id}`, user.id)
    return
  }
   
   
   
   let kontrol2 = new Discord.RichEmbed()
  .setTitle('<a:basarl:626445944258560012> Yetki Kontrolü')
  .setDescription('Sunucu Veri Tabanında paylaşımcı eklebilmeyeniz için gerekli izinleri buldum.. '+user+' Artık bir paylaşımcı, kod paylaşabilir!')
  .setColor('GREEN')
    x.edit(kontrol2)   
 
   db.set(`paylasimci_${message.guild.id}`, user.id) 
   
 }, 10000)
})

  
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'paylaşımcı',
  description: 'paylaşımcı', 
  usage: 'paylaşımcı'
};
