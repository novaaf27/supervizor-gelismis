const Discord = require('discord.js');
exports.run = (client, message, args) => { 
if(message.author.id !== "481121978426589184") if(message.author.id !== "419214688061227009") return message.reply('`yeterli yetkiye sahip değilsin.`')
let kullanıcı = message.mentions.users.first()
let komut = args.slice(1).join(' ');
let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('GREEN')
.setDescription('**'+message.member.user.username + '** İsteği Onaylanacak kullanıcıyı belirtmelisiniz.! <a:iptal:626445972620443648>')


let embed5 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('GREEN')
.setDescription('**'+ kullanıcı + '** Adlı kullanıcının Onaylanacak komutunu giriniz. <a:iptal:626445972620443648>')

if(!kullanıcı) return message.channel.send(embed3)
if(!komut) return message.channel.send(embed5)

  
  
  message.channel.send(kullanıcı + ' Adlı kullanıcının **'+komut+'** Adlı isteği onaylandı! <a:basarl:626445944258560012> ')
 kullanıcı.send('Selam,**'+kullanıcı +'** CodEming sunucusunda bulunmuş olduğunuz,**'+komut+'** isimli komut isteği Kurucu tarafından,Onaylandı! yapımı yakında başlayacak,Tekipte kalın! <a:basarl:626445944258560012> ')

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['onayla'], 
  permLevel: 0
};

exports.help = {
  name: 'onayla',
  description: 'onayla', 
  usage: 'onayla'
};
