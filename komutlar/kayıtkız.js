const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.guild.member(message.member.id).roles.has("701412014559592478"))
    return message.reply(
      `Bu komutu kullanamazsın ${message.guild.roles.get(
        "701412014559592478"
      )} değilsin.`
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return message.channel.send("**Etiket Atmayı Unuttun!**");
  let member = message.guild.member(kullanıcı);
  let vrol = "695652616583118849";
  let arol = "701412703625019402";
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
    .setFooter("© TlhaMert");
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e"],
  permLevel: 0
};

exports.help = {
  name: "kız",
  description: "Kız üyeyi kayıt eder.",
  usage: "!kız"
};
