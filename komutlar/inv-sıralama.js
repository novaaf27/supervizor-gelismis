const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      
let user2 = message.mentions.members.first()
let user = message.guild.member(user2)
let kontrol = db.fetch(`bonus_${user.id}`) 
let sayısı = db.fetch(`inviter_${user.id}`)   
let sonuc = kontrol + sayısı
let sayısıs;
 
  if(!user) return message.channel.send('Sorgulanacak kullanıcıyı belirtmelisin.')
  
  
  if (sayısı == null) sayısıs = ":no_entry: Bot'a kayıtlı davet bulunamadı!"
else sayısıs = sayısı
let sayısıs2;


let bonus;
  if (kontrol == null) bonus = ":no_entry: Bot'a kayıtlı Kurucu tarafından verilen davet bulunamadı!"
else bonus = kontrol  
 
    if (user.roles.has('634994310844252160')) {
   let bilgi = new Discord.RichEmbed()
.setColor('RED')
.setTitle('javascript,davet Bigileri')
  .setDescription('<a:hyper2:633991028306608128> Bilgisi Verilen Kullanıcı: **'+user+'**<a:hyper2:633991028306608128> \n \n __**Bilgiler**__')
  .addField('Üyelik Seviyesi:', '**javascript (s+)**')
  .addField('**Davet Bilgisi**', 'Sunucuya Davet Edilen Kişi Sayısı: **'+sayısıs+'** \n\n <a:yildiz:633977788981968896> **Bonus** (kurucu tarafından verilen): **'+bonus+'** \n \n <a:verifed:633993795066658832> **Toplam ' +sonuc+'**')
message.channel.send(bilgi)       
      return
    }   
    
    if (user.roles.has('634994384533848064')) {
   let bilgi = new Discord.RichEmbed()
.setColor('RED')
.setTitle('javascript,davet Bigileri')
  .setDescription('<a:hyper2:633991028306608128> Bilgisi Verilen Kullanıcı: **'+user+'**<a:hyper2:633991028306608128> \n \n __**Bilgiler**__')
  .addField('Üyelik Seviyesi:', '**javascript (+)**')
  .addField('**Davet Bilgisi**', 'Sunucuya Davet Edilen Kişi Sayısı: **'+sayısıs+'** \n\n <a:yildiz:633977788981968896> **Bonus** (kurucu tarafından verilen): **'+bonus+'** \n \n <a:verifed:633993795066658832> **Toplam ' +sonuc+'**')
message.channel.send(bilgi)       
      return
    }
    if (user.roles.has('634994462707154944')) {
  let bilgi = new Discord.RichEmbed()
.setColor('RED')
.setTitle('javascript,davet Bigileri')
  .setDescription('<a:hyper2:633991028306608128> Bilgisi Verilen Kullanıcı: **'+user+'**<a:hyper2:633991028306608128> \n \n __**Bilgiler**__')
  .addField('Üyelik Seviyesi:', '**javascript normal**')
  .addField('**Davet Bilgisi**', 'Sunucuya Davet Edilen Kişi Sayısı: **'+sayısıs+'** \n\n <a:yildiz:633977788981968896> **Bonus** (kurucu tarafından verilen): **'+bonus+'** \n \n <a:verifed:633993795066658832> **Toplam ' +sonuc+'**')
message.channel.send(bilgi)  
 return
 }

  let bilgi = new Discord.RichEmbed()
.setColor('RED')
.setTitle('javascript,davet Bigileri')
  .setDescription('<a:hyper2:633991028306608128> Bilgisi Verilen Kullanıcı: **'+user+'**<a:hyper2:633991028306608128> \n \n __**Bilgiler**__')
  .addField('Üyelik Seviyesi:', '**üyelik bulunamadı!**')
  .addField('**Davet Bilgisi**', 'Sunucuya Davet Edilen Kişi Sayısı: **'+sayısıs+'** \n\n <a:yildiz:633977788981968896> **Bonus** (kurucu tarafından verilen): **'+bonus+'** \n \n <a:verifed:633993795066658832> **Toplam ' +sonuc+'**')
message.channel.send(bilgi)  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'jsbilgi',
  description: 'taslak', 
  usage: 'jsbilgi'
};
