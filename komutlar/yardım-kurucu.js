const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

           var embed = new Discord.RichEmbed()    
      .setTitle(`:question: CodEming BOT - Kurucu Yardım Menüsü :grey_question:`)
      .setAuthor(`${message.member.user.username} `,message.author.avatarURL)
      .setDescription('Bu listedeki komutlar,Sadece kurucu çalıştırabilir.')
           .addField('c!tst', 'Bot test komutu.')
           .addField('c!reboot', 'Bot yeniden başlatması.')
           .addField('c!reddet', 'Gönderilen istekleri reddetme.')
           .addField('c!onayla', 'Gönderilen istekleri onaylama.')
           .setThumbnail(message.author.avatarURL)
           .setTimestamp()
      .setColor('RANDOM') 
           message.channel.sendEmbed(embed)

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu'],
  permLevel: 0
};

exports.help = {
  name: 'yardım-kurucu',
  description: 'yardım menüsü',
  usage: 'yardım-kurucu'
};
