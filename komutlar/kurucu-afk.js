const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
if(message.author.id !== "419214688061227009") return message.reply('bu özellik sadece kurucuya özel.') 

  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kurucu',
  description: 'taslak', 
  usage: 'kurucu'
};
