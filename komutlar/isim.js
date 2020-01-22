const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  if (!message.guild.member(message.member.id).roles.has('608248510827069462')) 
  return message.reply('Bu komutu kullanamazsın **📞Teyit Sorumlusu** değilsin.')
  
  let user = message.mentions.users.first() || message.guild.members.get(args[0])
  let isim = args.slice(1).join(' ');
  let eming = ("ֆ ")
  if(!user) return message.channel.send('İsim işlemine devam etmek için,bir kullanıcı gerekiyor.').then(s => s.delete(7000))
  
  if(!isim) return message.channel.send(user + ' Adlı kullanıcıya belirlenecek ismi belirtmen gerekiyor.')
  
  message.guild.member(user.id).setNickname(eming+isim)
  message.guild.member(user.id).setNickname(eming+isim)
  message.guild.member(user.id).setNickname(eming+isim)

const embed = new Discord.RichEmbed()
                  .setDescription("İsim Değiştirme Başarılı <:evet:663273663730286612>")
                  .setColor("GREEN")
                  .addField(":star: Yetkili", message.author)
                  .setTimestamp()
                  .addField(":star: İsmi Değiştilen Üye", user)
                  .setTimestamp()
                  .addField(":star: Yeni İsmi", eming+isim)
        message.channel.send(embed)

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