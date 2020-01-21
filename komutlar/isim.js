const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  if (!message.guild.member(message.member.id).roles.has('608248510827069462')) 
  return message.reply('Bu komutu kullanamazsın **📞Teyit Sorumlusu** rolü yok.')
  
  let user = message.mentions.users.first() || message.guild.members.get(args[0])
  let isim = args.slice(1).join(' ');
  let eming = ("ֆ ")
  if(!user) return message.channel.send('İsim işlemine devam etmek için,bir kullanıcı gerekiyor.').then(s => s.delete(7000))
  
  if(!isim) return message.channel.send(user + ' Adlı kullanıcıya belirlenecek ismi belirtmen gerekiyor.')
  
  message.guild.member(user.id).setNickname(eming+isim)
  message.guild.member(user.id).setNickname(eming+isim)
  message.guild.member(user.id).setNickname(eming+isim)

const codeplus = new Discord.RichEmbed()
        .setTitle(`**Sunucuya Hoşgeldiniz**`)
        .setDescription(`${user}, **İsminiz Başarıyla Kaydedildi! İyi Eğlenceler.** `)
        .setColor('00000')
        .setTimestamp()
        message.channel.send(codeplus)

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['i'], 
  permLevel: 0
};

exports.help = {
  name: 'isim',
  description: 'taslak', 
  usage: 'isim'
};