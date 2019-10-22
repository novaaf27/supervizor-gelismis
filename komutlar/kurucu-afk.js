const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
if(message.author.id !== "419214688061227009") return message.reply('bu özellik sadece kurucuya özel.') 

  

 if(args[0] === "kapalı") {
  let embed = new Discord.RichEmbed()
  .setTitle('Kurucu Etiket Engel')
  .setDescription('kurucu etiket engel devredışı,Etiket atanları engellemeyeceğim.Onlara ceza uygulamayacağım..')
  .setColor('RED')
  message.channel.send(embed)
   db.delete(`kurucu_${message.guild.id}`)
return

 }
  //<a:iptal:626445972620443648>
  if(args[0] === "açık") {
   let embed = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> Etiket Engel Aktif!')
  .setDescription('Artık sunucucu kurucusu; **Yasin i** etiketleyenleri 3 kere uyardıktan sonra **spectator** rolünü alacağım..')
  .setColor('GREEN')
  message.channel.send(embed)   
db.set(`kurucu_${message.guild.id}`, message.guild.id)   
    return 

  }
  let embed = new Discord.RichEmbed()
  .setDescription('Bir durum belirtmelisin.Örnek `c!kurucu açık` veya `c!kurucu kapalı`')
  .setColor('RED')
  message.channel.send(embed)  
   
  
  
  
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
