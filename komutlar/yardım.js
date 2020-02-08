const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 

     let help = new Discord.RichEmbed()
  .setTitle('Judge Register Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "Kayıt Botu Komutlarımız")
  .addField('.', "**› j!isim @etiket İsim | Yaş** \n Kayıttaki insanların ismini değiştirmeye yarar. \n\n **› j!erkek @etiket** \n Kayıttaki erkek kullanıcıları kaydetmeye yarar.\n\n **› j!kız @etiket** \n Kayıttaki kız kullanıcıları kaydetmeye yarar..")   
  .addBlankField()
  .setFooter('© Judge Register')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')     
message.channel.send(help)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kayıt','kayit'], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'taslak', 
  usage: 'kayıt'
};
