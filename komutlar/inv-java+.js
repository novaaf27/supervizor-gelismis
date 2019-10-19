const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
let kontrol = db.fetch(`bonus_${message.member.id}`)  
let sayısı = db.fetch(`inviter_${message.member.id}`)    
let sonuc = kontrol + sayısı 
if (message.channel.name !== '💻│bot-komut') {
if (!message.member.hasPermission("ADMINISTRATOR"))  {
var embed = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata! `,message.author.avatarURL)
.setColor("RED")
.setDescription('Bot komutları,**"#💻│bot-komut"** Odasında kullanılmalı.')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed).then(msg => msg.delete(8000));
}
} 
if (message.member.roles.has('634994310844252160')) {
  let hata = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Hata :(! `,message.author.avatarURL)
  .setColor('RED')
  .addBlankField()
  .setTitle("<a:yildiz:633977788981968896> **"+message.member.user.username +" ** Bu gerçekten inanılmaz <a:yildiz:633977788981968896>")
  .addBlankField()
  .setDescription('Sunucumuzdaki en yüksek **javascript** paketi olan; `javascript (s+)` paketine ulaşmışsınız! \n Verdiğiniz destek için;yönetim ekibi olarak içten teşekkürlerimizi sunuyoruz :)')
  message.channel.sendEmbed(hata) 
   return
   }  
  
 if (!message.member.roles.has('634994462707154944')) {
let başarılı = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Başarılı! `,message.author.avatarURL)
  .setColor('GREEN')   
  .setDescription('Sunucunun bedava paketi olan,`javascript` paketinizi başarıyla adlınız.İyi kullanımlar dileriz. <a:basarl:626445944258560012> ') 
  .addBlankField()
.addField("**Şimdi n'olacak?**", "Evet!,Kodları görüyorsunuz ama..Sadece bir kısmını..Diğer komutlar gördüklerinizden daha nadir,daha değerli.Yine aynı komutu, `c!js` kullanarak bilgi alabilirsiniz.")
  message.channel.send(başarılı)
   
   message.member.addRole('634994462707154944')
   return
 } // yoksa


  
  
  
  if(sonuc == 0) {

    let hata = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Hata :(!`,message.author.avatarURL)
  .setColor('RED')
.setDescription("**"+message.member.user.username + "** Sunucumuza bot'a kayıtlı hiçbir davetiniz bulunmuyor! <a:iptal:626445972620443648> \n \n Bu hatanın başlıca sebeplerinden biri, davetler bot'a `15.10.2019` tarihinden beri kaydolmaya başlaması olabilir.")
  .addBlankField()
  .addField(':warning: Dikkat!', 'Lütfen kendiniz bir davet linki oluşturup insanları davet edin!,aksi taktirde bota kaydolmayabilir!')
  message.channel.sendEmbed(hata) 
  return
}
   if(sonuc < 10) {
  let hata = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Hata :(! `,message.author.avatarURL)
  .setColor('RED')
.setDescription("**"+message.member.user.username +" " +sonuc + '** Davetiniz `javascript` paketi yükseltmeye yetmiyor <a:iptal:626445972620443648>')
  .addBlankField()
  .addField('**Javascript Yükseltme Paketleri**', '<a:hyper:632905422407335948> Javascript **» 0** <== Şu anki paketiniz.\n \n<a:hyper:632905422407335948> Javascript (+) **»** 10 \n \n <a:hyper:632905422407335948> Javascript (s+) **»** 30')
  message.channel.sendEmbed(hata)   
  return
} 
  
if(sonuc > 30) {  
  let başarılı = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Başarılı! `,message.author.avatarURL)
  .setColor('GREEN')   
  .setDescription('**javascript (+)** paketinizin bir üstü olan;`javascript (s+)` hesabınıza eklendi iyi kullanımlar dileriz. <a:basarl:626445944258560012> ') 
  .addBlankField()
.addField("Teşekkür ederiz..!", "Artık en üst seviye javascript üyesi oldunuz :)")
  message.channel.send(başarılı)
 message.member.addRole('634994310844252160')
  return
}


  if(sonuc >= 10) {
    let hata = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Hata :(! `,message.author.avatarURL)
  .setColor('RED')
.setDescription("**"+message.member.user.username +" " +sonuc + '** Davetiniz `javascript` paketi yükseltmeye yetmiyor <a:iptal:626445972620443648>')
  .addBlankField()
  .addField('**Javascript Yükseltme Paketleri**', '<a:hyper:632905422407335948> Javascript **» 0** \n \n<a:hyper:632905422407335948> Javascript (+) **»** 10 <== Şu anki paketiniz.\n \n <a:hyper:632905422407335948> Javascript (s+) **»** 30')

  if (message.member.roles.has('634994384533848064')) return message.channel.sendEmbed(hata) 

  
  let başarılı1 = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}  Başarılı! `,message.author.avatarURL)
  .setColor('GREEN')   
  .setDescription('`javascript` paketinzin bir üstü olan;`javascript (+)` hesabınıza eklendi iyi kullanımlar dileriz. <a:basarl:626445944258560012> ') 
  .addBlankField()
.addField("Bitmedi :)!", "Aynı komutu kullanarak,`javascript (s+)` paketine **30** davet karşılığında,yükseltebilirsiniz..")
  message.channel.send(başarılı1)
 message.member.addRole('634994384533848064')
  return
  
  } 

  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['js'], 
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'js', 
  usage: 'js'
};
