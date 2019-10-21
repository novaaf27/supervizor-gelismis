const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = (client, message, args) => { 
 
       if (talkedRecently.has(message.author.id)) {
      message.delete();
       return message.channel.send('Bu komut güvenlik nedeniyle saate 1 kullanılabilir.');
 
     } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 7200000);
    }
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'taslak',
  description: 'taslak', 
  usage: 'taslak'
};
