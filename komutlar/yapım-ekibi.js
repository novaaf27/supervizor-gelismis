const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()

.setTitle(`REGİSTER`)
.setAuthor(`Bot Bilgi`,message.author.avatarURL,)
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL) 
.addField(`<a:red_star:682949918557863996> l **Botun Kullanıcı Sayısı**`,client.users.size) 
.addField(`<a:red_star:682949918557863996> l **Botun Olduğu Sunucu Sayısı**`,client.guilds.size) 
.addField(`<a:red_star:682949918557863996> l **Bottaki Komut Sayısı**`,client.commands.size)
.addField(`<a:red_star:682949918557863996> l **Sahip**`, `<@505426486954819585> <a:bits:681880891160657920>`,true) 
.addField(`<a:red_star:682949918557863996> l **Botun Geliştiricisi**`,`<@529613090132852746> <a:bits:681880891160657920>`,true)
.addField(`<a:red_star:682949918557863996> l **Botun Geliştiricisi**`,`<@679694797270810642> <a:bits:681880891160657920>`,true)
.addField(`<a:red_star:682949918557863996> l **Botun Geliştiricisi**`,`<@650000804186554399> <a:bits:681880891160657920>`,true)
.addField(`<a:red_star:682949918557863996> l **Bot Discord.js Versiyon**`,Discord.version)
.addField(`<a:red_star:682949918557863996> l **Bot İd**`,client.user.id) 
.setTimestamp()
message.channel.sendEmbed(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımekibi"],
  permLevel: 0
};

exports.help = {
  name: 'yapımekibi',
  description: 'Yapım Ekibini Gösterir',
  usage: '!yapımekibi'
};