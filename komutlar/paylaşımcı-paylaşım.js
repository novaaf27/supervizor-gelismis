const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = async(client, message, args) => { 
 
  let kontrol3 = await db.fetch(`paylasimci_${message.member.id}`)   
  
  
  
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
  
  
  
  
  let katagori = new Discord.Rich.Embed()
.setTitle('Katagori Seçimi')
.setColor('GREEN')
  .setDescription('Lütfen aşağıdaki numaralara göre kod açmak istediğiniz kanalın numarasını bulunduğunuz kanala gönderin.')
.addBlankField()
.addField('Katagoriler:', '**1** => **javascript (s+)** \n **2** => **javascript (+)** \n **3** => **kod paylaşımları** \n **4** => bot, alt yapı** \n **5** => **html paylaşımları**')
message.channel.send(katagori)

  
  message.channel.awaitMessages.then(a => {
    
    if(a.content === '1') {
      
      
    }
  })

})
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'taslak',
  description: 'taslak', 
  usage: 'taslak'
};
