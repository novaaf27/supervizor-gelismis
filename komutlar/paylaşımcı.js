const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let kontrol = new Discord.RichEmbed()
  .setTitle('<a:google:635846373052383243> Yetnkiniz Kontrol Ediliyor')
  .setDescription('Sunucu veri tabanında yetkiniz kontrol ediliyor lütfen bekleyiniz..')
  
message.channel.send(kontrol).then(x => {

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
