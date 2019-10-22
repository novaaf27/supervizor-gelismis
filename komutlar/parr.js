const Discord = require('discord.js');

exports.run = async(client, message, args) => { 
if (!message.member.roles.has('635036855733321748')) return message.reply('Sadece partner yetkilileri,Partner ekleyebilir.') 
  if (message.channel.name !== '📄│partner-yollama') {

var embed = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Hata! `,message.author.avatarURL)
.setColor("RED")
.setDescription('partnerlik komutu etiket nedeniyle sadece test kanalında kullanılabilir.')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL)
return message.channel.send(embed).then(msg => msg.delete(8000));

} 
 

  
    let mesaj = args.slice(0).join(' ')
  if(!mesaj) return message.reply('```partner mesajı``` belirtmen gerek.')
  message.channel.send('Partnerlik Mesajı iletildi!').then(sa => message.delete(5000))
  let abc = await client.channels.get('635036553818800158').send("Partner Mesajı");
  abc.edit(mesaj).then(oyle => message.delete(500))

  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['partner'], 
  permLevel: 0 
};

exports.help = {
  name: 'partner', 
  description: 'sa sa', 
  usage: 'partner' 
};
