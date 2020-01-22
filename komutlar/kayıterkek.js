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

const embed = new Discord.RichEmbed()
                  .setDescription("Kayıt İşlemi Başarılı <:evet:663273663730286612>")
                  .setColor("GREEN")
                  .addField(":star: Yetkili", message.author)
                  .setTimestamp()
                  .addField(":star: Kaydedilen Üye", member)
                  .setTimestamp()
                  .addField("<a:emoji_33:619891578370261013> Swerveye Hoşgeldin <a:emoji_33:619891578370261013>")
        message.channel.send(embed)

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