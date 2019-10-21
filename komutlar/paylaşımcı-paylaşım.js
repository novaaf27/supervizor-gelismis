const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = async(client, message, args) => { 
 
  let kontrol3 = await db.fetch(`paylasimci_${message.member.id}`)   
  let kanal = await db.fetch(`kanalismi_${message.member.id}`)
  
  
       if (talkedRecently.has(message.author.id)) {
      message.delete();
       return message.channel.send('Bu komut güvenlik nedeniyle saate 1 kullanılabilir.');
 
     } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 7200000);
    }
  
    let kontrol = new Discord.RichEmbed()
  .setTitle('<a:google:635846373052383243> Yetkiniz Kontrol Ediliyor')
  .setColor('BLUE')
  .setDescription('Sunucu veri tabanında yetkiniz kontrol ediliyor lütfen bekleyiniz..')
  
message.channel.send(kontrol).then(x => {
 setTimeout(() => {
if(!kontrol3) {
  
    let kontrol = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> Yetki Hatası')
  .setDescription('Sunucu Veri Tabanında paylaşımcı eklebilmeyeniz için gerekli iznininizi bulamadım.')
  .setColor('RED')
    x.edit(kontrol) 
return
}

   
   
   let kontrol2 = new Discord.RichEmbed()
  .setTitle('<a:basarl:626445944258560012> Yetki Kontrolü')
  .setDescription('Yetki onaylandı! Lütfen botun sizden isteklerini gerçekleştirerek kod paylaşacağınız kanalı açın..')
  .setColor('GREEN')
    x.edit(kontrol2)   

   
 }, 10000)


  
  
  let isim = new Discord.RichEmbed()
  .setTitle('Kanal İsmi')
  .setDescription('Lütfen oluşturulacak kanal ismini bulunduğunuz kanala atın.')
  .setColor('GREEN')
  
   message.channel.awaitMessages.then(b => {
    
db.set(`kanalismi_${message.member.id}`, b.content)
  
   }) 
  let katagori = new Discord.Rich.Embed()
.setTitle('Katagori Seçimi')
.setColor('GREEN')
  .setDescription('Lütfen aşağıdaki numaralara göre kod açmak istediğiniz kanalın numarasını bulunduğunuz kanala gönderin.')
.addBlankField()
.addField('Katagoriler:', '**1** => **javascript (s+)** \n **2** => **javascript (+)** \n **3** => **kod paylaşımları** \n **4** => bot, alt yapı** \n **5** => **html paylaşımları**')
message.channel.send(katagori)

  
  message.channel.awaitMessages.then(a => {
    
  
    if(a.content === '1') {
  message.guild.createChannel(kanal, {parent: message.guild.channels.find(channel => channel.id === "635540914764382218"), topic: message.member.user.username +' adlı kullanıcının paylaştığı '+kanal+' adlı kodu.'})    
      
    }
    if(a.content === '2') {
  message.guild.createChannel(kanal, {parent: message.guild.channels.find(channel => channel.id === "634388026738343968"), topic: message.member.user.username +' adlı kullanıcının paylaştığı '+kanal+' adlı kodu.'})    
      
    }
  if(a.content === '3') {
  message.guild.createChannel(kanal, {parent: message.guild.channels.find(channel => channel.id === "635029835697225739"), topic: message.member.user.username +' adlı kullanıcının paylaştığı '+kanal+' adlı kodu.'})    
      
    }   
   if(a.content === '4') {
  message.guild.createChannel(kanal, {parent: message.guild.channels.find(channel => channel.id === "622484487389052968"), topic: message.member.user.username +' adlı kullanıcının paylaştığı '+kanal+' adlı kodu.'})    
      
    }    
   if(a.content === '5') {
  message.guild.createChannel(kanal, {parent: message.guild.channels.find(channel => channel.id === "631560935156482058"), topic: message.member.user.username +' adlı kullanıcının paylaştığı '+kanal+' adlı kodu.'})    
      
    }    
  })

})
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['paylaş'], 
  permLevel: 0
};

exports.help = {
  name: 'paylaş',
  description: 'taslak', 
  usage: 'payşal'
};
