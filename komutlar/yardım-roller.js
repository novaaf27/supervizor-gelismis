const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

           var embed = new Discord.RichEmbed()    
      .setTitle(`:question: CodEming BOT - Roller Yardım Menüsü :grey_question:`)
      .setAuthor(`${message.member.user.username} `,message.author.avatarURL)
      .setDescription('Eğer bir hata olursa lütfen yetkililer ile iletişime geçin, İyi kullanımlar dileriz.\n ---------------------------------------------------------- \n -**c!js:** JS komutlarını gösteren rolü verir. \n -**c!py**: Python komutlarını gösteren rolü verir. \n -**c!html**: HTML komutlarını gösteren rolü verir.')     
      .setThumbnail(message.author.avatarURL)
           .setTimestamp()
      .setColor('RANDOM') 
           message.channel.sendEmbed(embed)

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['roller'],
  permLevel: 0
};

exports.help = {
  name: 'yardım-roller',
  description: 'yardım menüsü',
  usage: 'yardım-roller'
};
