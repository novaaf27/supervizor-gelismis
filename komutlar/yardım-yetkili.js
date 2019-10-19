const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

           var embed = new Discord.RichEmbed()    
      .setTitle(`:question: CodEming BOT - Yetkili Yardım Menüsü :grey_question:`)
      .setAuthor(`${message.member.user.username} `,message.author.avatarURL)
      .setDescription('Yetkililer eğer yetkilerini gereksiz kullanırsa,yetkisi alınır!')     
      .setThumbnail(message.author.avatarURL)
   .addField("c!ban :", "Kullanıcıyı sunucudan sınırsız uzaklaştırmanızı sağlar")     
   .addField("c!kick :", "Kullanıcıyı sunucudan atmanızı sağlar.") 
   .addField('c!uyar', 'Kullanıcıyı uyarmanızı sağlar')
   .setTimestamp()
   .setColor('RANDOM') 
   message.channel.sendEmbed(embed)

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help-yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yardım-yetkili',
  description: 'yardım menüsü',
  usage: 'yardım-yetkili'
};
