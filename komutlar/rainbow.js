const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
if(message.author.id !== "598176001037565960") if(message.author.id !== "419214688061227009") return message.reply('`Rainbow Rol` sadece **Selin ve Yasin** Yönetebilir.')
    



    
if(args[0] === "kapalı") {
  
      let embed4 = new Discord.RichEmbed()
  .setColor('RED')
.setDescription('Rainbow Rol sistemini başarıyla Devre dışı bıraktım.. <a:basarl:626445944258560012>')
  message.channel.send(embed4)   
message.guild.roles.find('name', '🔥 | Y 💜 S | 🔥').setColor("#030200");
   
  
  return

}
  
if(args[0] === "açık") {
    
   let embed1 = new Discord.RichEmbed()
  .setColor('GREEN')
.setDescription('Rainbow Rol sistemini başarıyla Aktif ettim. <a:basarl:626445944258560012>')
  
   message.channel.send(embed1)  
setInterval(() => {
  message.guild.roles.find('name', '🔥 | Y 💜 S | 🔥').setColor("RANDOM");
   }, 17000);

  
  return 
}
  
 message.channel.send('bir değer belirtmelisin. `c!rainbow açık`,`c!rainbow kapalı`') 
    
    
    
  

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'rainbow',
  description: 'taslak', 
  usage: 'rainbow'
};
