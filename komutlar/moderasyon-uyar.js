const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

  let reason = args.slice(1).join(' ');
  let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kullanıcı) return message.reply('Kullanıcı Bulunamadı!');
  if (!reason) return message.reply('Uyarı Sebebini Yazmalısın!');
////////////////////////U3
message.channel.send(kullanıcı +','+reason+' Sebebiyle uyarıldı!')
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Kullanıcı Uyarıldı!')
    .addField('Uyarılan Kullanıcı:', `**${kullanıcı.user.username}**`)
    .addField('Uyaran Yetkili:', `**${message.author.username}#${message.author.discriminator}**`)
    .addField('Uyarma Sebebi', reason);
    client.channels.get('622344471237099540').send(embed)

let embed2 = new Discord.RichEmbed()
.setDescription('CodEming Sunucusundan,**'+reason+'** Sebebiyle uyarıldın.')
.setFooter('Bu uyarılar devam ederse sunucutan yasaklanacaksın.')
 .setThumbnail('https://www.ilgitrafik.com/wp-content/uploads/2018/10/dikkat-levhas%C4%B1-t-20-tehlike-uyar%C4%B1-levhas%C4%B1-yol-trafik-tabelas%C4%B1-60-cm-90-cm-normal-performans-y%C3%BCksek-performans-levha-fiyat%C4%B1-imalat-%C3%BCretim-ankara.jpg')
.setAuthor(`${message.member.user.username} Selam Dostum,`,message.author.avatarURL)
.setColor('RED')
kullanıcı.send(embed2)
};
  
exports.conf = {
  enabled: true,  //komut aktif mi?
  guildOnly: false, 
  aliases: [], //başka kullanım şekilleri
  permLevel: 0 //prem leveli
};

exports.help = {
  name: 'uyar', // komut ismi 
  description: 'uyar', //komut açıklaması
  usage: 'uyar' //komut kullanım şekili
};
