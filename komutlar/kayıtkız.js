const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.guild.member(message.member.id).roles.has("yetkili rol id"))
    return message.reply(
      `Bu komutu kullanamazsın ${message.guild.roles.get(
        "yetkili rol id"
      )} değilsin.`
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return message.channel.send("**Etiket Atmayı Unuttun!**");
  let member = message.guild.member(kullanıcı);
  let vrol = "verilcek rol id";
  let arol = "alınacak rl id";
  member.addRole(vrol);
  member.removeRole(arol);

  const embed = new Discord.RichEmbed()
    .setDescription("Kayıt İşlemi Başarılı")
    .setColor("GREEN")
    .addField(":star: Yetkili", message.author)
    .setTimestamp()
    .addField(":star: Kaydedilen Üye", member)
    .setTimestamp()
    .addField(`:star: Verilen Rol`, message.guild.roles.get(vrol))
    .setTimestamp()
    .addField(`:star: Alınan Rol`, message.guild.roles.get(arol))
    .setFooter("© Register");
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e"],
  permLevel: 0
};

exports.help = {
  name: "erkek",
  description: "taslak",
  usage: "erkek"
};
