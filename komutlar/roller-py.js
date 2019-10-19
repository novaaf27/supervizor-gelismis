const Discord = require('discord.js');
exports.run = (client, message, args) => {

if (message.channel.name !== '💻│bot-komut') {
if (!message.member.hasPermission("ADMINISTRATOR"))  {
var embed = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata! `,message.author.avatarURL)
.setColor("RED")
.setDescription('Bot komutları,**"#💻bot-komut"** Odasında kullanılmalı.')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed).then(msg => msg.delete(8000));
}
} 
  let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
.setDescription('**'+message.member.user.username + '** Zaten "PY" rolüne sahipsiniz!')
   if (message.member.roles.has('634996894833180676')) return message.channel.sendEmbed(embed3) 
 
  
  let embed4 = new Discord.RichEmbed()
.setAuthor(`${message.member.user.username}  Başarılı! `,message.author.avatarURL)
  .setColor('GREEEN')
.setDescription('**'+message.member.user.username + '** **"py"** Rolün eklendi! artık hazır komutlara erişebilirsin! :unlock: \n **Not: sunucumuzda hanüz "PY" komutları paylaşımı başlamamıştır.**')
  message.channel.sendEmbed(embed4)
  
  message.member.addRole('634996894833180676')
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'py',
  description: 'py',
  usage: 'py'
};