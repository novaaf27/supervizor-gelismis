const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  if (!message.guild.member(message.member.id).roles.has('671434803681427495')) 
  return message.reply(`Bu komutu kullanamazsın ${message.guild.roles.get("671434803681427495")} değilsin. <:hayr:670933128835235841>`)
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('<:hayr:670933128835235841> **Etiket Atmayı Unuttun!**')
  let member = message.guild.member(kullanıcı)
  let vrol = ("671421657251971082")
  let arol = ("6671423809739423757")

  member.addRole('671421657251971082')
  member.removeRole('671423809739423757')

const embed = new Discord.RichEmbed()
                  .setDescription("Kayıt İşlemi Başarılı <:tik:670933175677091851>")
                  .setColor("GREEN")
                  .addField(":star: Yetkili", message.author)
                  .setTimestamp()
                  .addField(":star: Kaydedilen Üye", member)
                  .setTimestamp()
                  .addField(`:star: Verilen Rol`, message.guild.roles.get(vrol))
                  .setTimestamp()
                  .addField(`:star: Alınan Rol`, message.guild.roles.get(arol))
                  .setFooter('© Judge Register,')
        message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
}

exports.help = {
  name: 'kız',
  description: "taslak",
  usage: 'kız'
}