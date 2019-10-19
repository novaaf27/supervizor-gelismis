const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  
  if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.reply('`davet` silmeye yeterli yetkiniz bulunmuyor! :/')
  
 let user = message.mentions.users.first() 
 
 
 if(!user) {
     let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata..!`,message.author.avatarURL)
.setColor('RED')
.setDescription('Bir kullanıcı belirtsen ne kadar güzel olur..! :)')
 message.channel.send(embed3)
     return
     }
  let kontrol2 = db.fetch(`bonus_${user}`)
  
  let kontrol = db.fetch(`inviter_${user.id}`) 
  
       let embed3 = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata..!`,message.author.avatarURL)
.setColor('RED')
.setDescription(user + ' Daveti temizlendi!')
 message.channel.send(embed3)    
  
  db.delete(`inviter_${user.id}`)
  db.delete(`bonus_${message.member.id}`)
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'taslak', 
  usage: 'temizle'
};
