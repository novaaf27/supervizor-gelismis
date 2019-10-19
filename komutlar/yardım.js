const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

           var embed = new Discord.RichEmbed()    
      .setTitle(`:question: CodEming BOT - Yardım Menüsü :grey_question:`)
      .setAuthor(`${message.member.user.username} `,message.author.avatarURL)
      .setDescription('Eğer bir hata olursa lütfen yetkililer ile iletişime geçin, İyi kullanımlar dileriz.')     
      .setThumbnail(message.author.avatarURL)
   .addField("c!yardım-roller :", "Rol Alım komutları.")     
   .addField("c!yardım-yetkili :", "CodEming bot yetkili komutları.") 
   .addField('c!yardım-kurucu :', 'Yasin komutları yardım menüsü.')       
           .setTimestamp()
      .setColor('RANDOM') 
           message.channel.sendEmbed(embed)

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım menüsü',
  usage: 'yardım'
};
