const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
const ayarlar = require('./ayarlar.json');
if (message.channel.name !== '💻bot-komut') {
if (!message.author.id === ayarlar.sahip)  {
var embed = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata! `,message.author.avatarURL)
.setColor("RED")
.setDescription('Bot komutları,**"#💻bot-komut"** Odasında kullanılmalı.')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed).then(msg => msg.delete(8000));
 }
} 
  
  let afksebepi = args.slice(0).join(" ");
   
  
    let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
  .setDescription('Yanlış kullanım! \n örnek kullanım **c!afk <sebep>**')
  
  if(!afksebepi) return message.channel.sendEmbed(embed3)

  if(afksebepi.includes('www') || afksebepi.includes('https') || afksebepi.includes('com')) {
     let hata = new Discord.RichEmbed()
.setAuthor(`${message.member.user.username} Hata!`,message.author.avatarURL)
.setColor('RED')
  .setDescription('sebep kısmında link,site,server linki kullanılamaz!')
     message.channel.sendEmbed(hata)
message.delete()
    return
  }
  
  
      db.set(`afks_${message.author.id}`, afksebepi)
 db.set(`afk_süre_${message.author.id}`, Date.now());
     let basarılı = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Başarılı!`,message.author.avatarURL)
.setColor('GREEN')
  .setDescription('Artık; \n**' + afksebepi + '**,nedeniyle AFK modundasın.')
.setFooter('AFK modundan çıktığında,ismin düzelecek.')
     message.channel.sendEmbed(basarılı)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};