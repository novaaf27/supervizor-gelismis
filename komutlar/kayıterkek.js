const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  if (!message.guild.member(message.member.id).roles.has('608248510827069462')) 
  return message.reply('Bu komutu kullanamazsın **📞Teyit Sorumlusu** rolü yok.')
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('**Etiket Atmayı Unuttun!**')
  let member = message.guild.member(kullanıcı)

  member.addRole('590111080991162368')
  member.removeRole('618087321392251004')

const codeplus = new Discord.RichEmbed()
        .setTitle(`<a:aahg:652151800765612033> **Sunucuya Hoşgeldiniz** <a:emoji_33:619891578370261013>`)
        .setDescription(`${member}, **Kaydınız Başarıyla Gerçekleşti! İyi Eğlenceler.**`)
        .setColor('00000')
        .setTimestamp()
        message.channel.send(codeplus)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
}

exports.help = {
  name: 'erkek',
  description: "taslak",
  usage: 'erkek'
}