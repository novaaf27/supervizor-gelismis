const Discord = require('discord.js');
exports.run = (client, message, args) => { 
if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.reply('`yeterli yetkiye sahip değilsin.`')
  let kullanıcı = message.mentions.users.first()
let komut = args[1]
let reason = args.slice(2).join(' ');
let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
.setDescription('**'+message.member.user.username + '** İsteği reddedilecek kullanıcıyı belirtmelisiniz.! <a:iptal:626445972620443648>')

let embed4 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
.setDescription('**'+message.member.user.username + '** İstek reddedilme sebebini giriniz. <a:iptal:626445972620443648>')

let embed5 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
.setDescription('**'+ kullanıcı + '** Adlı kullanıcının reddedilecek komutunu giriniz. <a:iptal:626445972620443648>')
if(message.author.id !== "419214688061227009") return message.channel.send('istek reddetmek için yeterli izne sahip değilsin. <a:iptal:626445972620443648> ')

if(!kullanıcı) return message.channel.send(embed3)
if(!komut) return message.channel.send(embed5)
  if(!reason) return message.channel.send(embed4)
  
  
  message.channel.send(kullanıcı + ' Adlı kullanıcının **'+komut+'** Adlı kod isteği **'+reason+'** nedeniyle reddedildi.! <a:basarl:626445944258560012> ')
 kullanıcı.send('Selam,**'+kullanıcı +'** CodEming sunucusunda bulunmuş olduğunuz,**'+komut+'** isimli komut isteği Kurucu tarafından,**'+reason+'** nedeni ile reddedildi.! <a:iptal:626445972620443648>')

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['reddet'], 
  permLevel: 0
};

exports.help = {
  name: 'reddet',
  description: 'reddet', 
  usage: 'reddet'
};
