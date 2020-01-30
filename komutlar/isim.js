const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools,) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
  .setAuthor("Swerve Register", bot.user.avatarURL)
    .setColor('BLUE')
    .setTimestamp()
    .setDescription(`Swerve Özel Kayıt Botu.`)
    .addField(
      `İsim Değiştirme`,
      `\`w!i @etiket isim | Yaş\``
    )
    .addField(`Kaydetme`, `\`w!e @erkekuye\`, \`w!k @kızuye\``)
    .setFooter("© Swerve Register", bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
