const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = async(client, message, args) => { 
 
  let kontrol3 = await db.fetch(`paylasimci_${message.guild.id}`, message.member.id)   
  let kanal = args[0]
  let sayı = args[1]
  
       if (talkedRecently.has(message.author.id)) {
    
         
         message.delete();
       return message.channel.send('Bu komut güvenlik nedeniyle saate 1 kullanılabilir.');
 
     } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 7200000);
    }
  
  if(!kanal) return message.channel.send('Lütfen kurulacak kanalın,kodun ismini belirtin.')
 
   let katagori = new Discord.RichEmbed()
.setTitle('Katagori Seçimi')
.setColor('GREEN')
  .setDescription('Lütfen aşağıdaki numaralara göre kod açmak istediğiniz kanalın numarasını yazınız. \n Örnek kullanım ````c!paylaş afk-kodu 3```')
.addBlankField()
.addField('Katagoriler:', '**1** => **javascript (s+)** \n **2** => **javascript (+)** \n **3** => **kod paylaşımları** \n **4** => bot, alt yapı** \n **5** => **html paylaşımları**')
   
  if(!sayı) return message.channel.send(katagori)
    let kontrol = new Discord.RichEmbed()
  .setTitle('<a:google:635846373052383243> Yetkiniz Kontrol Ediliyor')
  .setColor('BLUE')
  .setDescription('Sunucu veri tabanında yetkiniz kontrol ediliyor lütfen bekleyiniz..')
  
message.channel.send(kontrol).then(x => {
 setTimeout(() => {
if(!kontrol3) {
  
    let kontrol = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> Yetki Hatası')
  .setDescription('Sunucu Veri Tabanında kod paylaşabilmeniz için gerekli iznininizi bulamadım.')
  .setColor('RED')
    x.edit(kontrol) 
return
}

   
   
   let kontrol2 = new Discord.RichEmbed()
  .setTitle('<a:basarl:626445944258560012> Yetki Kontrolü')
  .setDescription('Yetki onaylandı! '+kanal+' Adlı kanalı kurdum lütfen içine girip paylaşımınızı yapınız eğer içi boş kalırsa,3 saat içinde sileceğim.')
  .setColor('GREEN')
    x.edit(kontrol2)   

   
 }, 10000).then
   
 

let kanal1 =  message.guild.channels.find(channel => channel.id === "635540914764382218")
 
  
    if(sayı == '1') {

      message.guild.createChannel(kanal, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "js s+")));
      
    }
    if(sayı == '2') {
      message.guild.createChannel(kanal, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "js (+)")));
      
    }
  if(sayı == '3') {
      message.guild.createChannel(kanal, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "kod paylaşımları")));
      
    }   
   if(sayı == '4') {
      message.guild.createChannel(kanal, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "bot , alt yapı")));
      
    }    
   if(sayı == '5') {
      message.guild.createChannel(kanal, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "html paylaşımları")));
      
    }    
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
