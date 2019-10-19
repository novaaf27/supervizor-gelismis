const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const db = require('quick.db');
exports.run = (client, message, args) => {

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
    const embedyardim = new Discord.RichEmbed()
        .setColor("GREEN")
 .setTitle('**CodEming BOT,**')
  .setDescription('Anlık ping durumu: **' + client.ping + '**')
    .setColor('000000')
    .setFooter('CodEming Sunucu Bot u!') 
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embedyardim)

    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pong","gecikme","servis"],
    permLevel: 0
};

exports.help = {
    name: 'ping',
};