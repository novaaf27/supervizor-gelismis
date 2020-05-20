const Discord = require("discord.js");
const data = require('quick.db');
exports.run = async (client, message, args) => {// chimp#6907
if(!message.member.roles.has(`712684893829595196`)) return;
// Sadece role sahip olanlar kullansın istiyorsanız 4. satır yerine:
// if(!message.member.roles.has(`rol id`)) return;
  
if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)

let isimön = 'Δ'  
let role = message.guild.roles.get(`707595428304257104`)// Erkek rol id
let unregistered = message.guild.roles.get(`712055785353641995`)// Kayıtsız rol id
let channel = message.guild.channels.get(`712106936669306901`) || message.channel// Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
let isim = args[1];
if(!isim) return message.channel.send(`${args[0]}, için bir isim girmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`${args[0]}, için bir isim gir.`)
if(yaş.length > 2) return message.channel.send(`Adam 100 yaşında değil ya?`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} kanalında kullanıldı.`)

message.guild.members.get(kullanıcı.id).setNickname(`${isimön} ${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(role.id)
message.guild.members.get(kullanıcı.id).removeRole(unregistered.id)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`**${message.author} tarafından ${isim} | ${yaş} olarak kayıt edildin.`))

channel.send(
emb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi.`)
.addField(`Kayıt eden:`, message.author, true)
.addField(`Yeni ismi:`, args[1], true)
.addField(`Yeni yaşı:`, args[2], true)
.addField(`Verilen rol:`, role.name, true)
.addField(`Alınan rol:`, unregistered.name, true))
  
 message.channel.send(
 emb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi.`)
.addField(`Kayıt eden:`, message.author, true)
.addField(`Yeni ismi:`, args[1], true)
.addField(`Yeni yaşı:`, args[2], true)
.addField(`Verilen rol:`, role.name, true)
.addField(`Alınan rol:`, unregistered.name, true))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'k'
};// codare