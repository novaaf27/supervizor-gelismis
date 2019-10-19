const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message) => {  

  
    let tagg = await db.fetch(`tag_${message.guild.id}`)
  

var original = await db.fetch(`tagM_${message.guild.id}`).replace("-kişi-", `${message.member.user.username}`).replace("-tag-", `${tagg}`).replace("-sunucu-", `${message.guild.name}`).replace("-kişisayı-", `${message.guild.memberCount}`)
if (!original === undefined) original = ` Sunucu Tagı \`${tagg || "Bilinmiyor"}\`!.`   
  message.channel.send(original)
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["l"],
  permLevel: 4
};

module.exports.help = {
  name: 'test2',
  description: 'Tag',
  usage: 'tsty'
};