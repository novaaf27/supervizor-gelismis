const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.guild.member(message.member.id).roles.has("Yetkili rol id"))
    return message.reply(
      `Bu komutu kullanamazsın ${message.guild.roles.get(
        "yetkili rol id"
      )} değilsin.`
    );

  let user =
    message.mentions.users.first() || message.guild.members.get(args[0]);
  let isim = args.slice(1).join(" ");
  let eming = "TAG ";
  if (!user)
    return message.channel
      .send("**Etiket Atmayı Unuttun**")
      .then(s => s.delete(7000));

  if (!isim)
    return message.channel.send(
      user +
        "Adlı kullanıcıya belirlenecek ismi belirtmen gerekiyor."
    );

  message.guild.member(user.id).setNickname(eming + isim);

  const embed = new Discord.RichEmbed()
    .setDescription("İsim Değiştirme Başarılı")
    .setColor("GREEN")
    .addField(":star: Yetkili", message.author)
    .setTimestamp()
    .addField(":star: İsmi Değiştirilen Üye", user)
    .setTimestamp()
    .addField(`:star: Yeni İsmi`, eming + isim)
    .setFooter("© Register");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "isim",
  description: "taslak",
  usage: "isim"
};
