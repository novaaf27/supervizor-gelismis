const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (message.channel.name !== '💻│bot-komut') {
if (!message.member.hasPermission("ADMINISTRATOR"))  {
var embed = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata! `,message.author.avatarURL)
.setColor("RED")
.setDescription('Bot komutları,**"#💻│bot-komut"** Odasında kullanılmalı.')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed).then(msg => msg.delete(8000));
}
} 

  let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
.setDescription('**'+message.member.user.username + '** Zaten "HTML" rolüne sahipsiniz!')
   if (message.member.roles.has('635021210413170709')) return message.channel.sendEmbed(embed3) 
 
  
  let embed4 = new Discord.RichEmbed()
.setAuthor(`${message.member.user.username} Başarılı! `,message.author.avatarURL)
  .setColor('GREEEN')
.setDescription('**'+message.member.user.username + '** **"HTML"** Rolün eklendi! artık hazır komutlara erişebilirsin! :unlock:')
  message.channel.sendEmbed(embed4)
  
  message.member.addRole('635021210413170709')
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'html',
  description: 'html',
  usage: 'html'
};