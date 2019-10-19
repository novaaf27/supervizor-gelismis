const Discord = require('discord.js');

const moment = require('moment');
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

var ayarlar = require('../ayarlar.json');

exports.run = (bot, message, args) => {
   let insanlar = message.guild.members.filter(m => !m.user.bot).size;
let botlar = message.guild.members.filter(m => m.user.bot).size
  let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(`${bot.user.tag} (`+bot.user.id+`)`, bot.user.avatarURL)
           
.setTitle('Sunucu,Bot Bilgi.')
.setDescription('Aşağıdaki Veriler anlık verilerdir,zaman ile bu veriler değişebilir.')
.addField('**SUNUCU**', '---------------------------------------')  
.addField('Kanal Sayısı:', '**[' + message.guild.channels.size + ']**  🔊**' + message.guild.channels.filter(i => i.type == "voice").size + '** 💬**' + message.guild.channels.filter(m => m.type == "text").size + '**')
 .addField('codEming Sunucu Kullanıcı Bilgisi:','**[' + message.guild.memberCount  + ']**  👤**' + insanlar + '** 🖥**' + botlar + '**', true)
.addField('BOT BİLGİSİ', '---------------------------------------')
.setColor('RED')
.addField("CPU Kullanımı:", `%${percent.toFixed(2)}`,true)
.addField("RAM Kullanımı:", `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,true)    
.addField("Çalışma Süresi:", `${duration}`,true)
.addField("Shard:", "``0``",true)//`\`${bot.shard.count}\``,true)
        message.channel.send(embedStats)
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bilgi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'bilgi',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'bilgi'
  };