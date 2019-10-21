const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let kontrol = new Discord.RichEmbed()
  .setTitle('<a:google:635846373052383243> Yetkiniz Kontrol Ediliyor')
  .setColor('BLUE')
  .setDescription('Sunucu veri tabanında yetkiniz kontrol ediliyor lütfen bekleyiniz..')
  
message.channel.send(kontrol).then(x => {
 setTimeout(() => {
if(message.author.id !== "598176001037565960") {
  
    let kontrol = new Discord.RichEmbed()
  .setTitle('<a:iptal:626445972620443648> Yetki Hatası')
  .setDescription('Sunucu Veri Tabanında paylaşımcı eklebilmeyeniz için gerekli iznininizi bulamadım.')
  .setColor('RED')
    x.edit(kontrol) 
}
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
