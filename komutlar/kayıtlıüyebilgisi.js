const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, prefix, ayar, emoji) => {
  let erkekRolü = "703446279275020338";
  let kızRolü = "703449968878420101";
  let ekipRolü = "703477577754345514";
  const embeddd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription(
      `Sunucu Toplam Üye: ${message.guild.memberCount} \nToplam Aktif Üye: ${
        message.guild.members.filter(b => b.presence.status !== "offline").size
      } \nErkek Üye: ${
        message.guild.roles.get(erkekRolü).members.size
      } \nKız Üye: ${message.guild.roles.get(kızRolü).members.size} \nEkip: ${
        message.guild.roles.get(ekipRolü).members.size
      } \nAktif Erkek Üye: ${
        message.guild.roles
          .get(erkekRolü)
          .members.filter(x => x.presence.status !== "offline").size
      }  \nAktif Kız Üye: ${
        message.guild.roles
          .get(kızRolü)
          .members.filter(x => x.presence.status !== "offline").size
      } \nAktif Ekip: ${
        message.guild.roles
          .get(ekipRolü)
          .members.filter(x => x.presence.status !== "offline").size
      } \nSes Kanalında Bulunan: ${
        message.guild.members.filter(a => a.voiceChannel).size
      }`
    );
  message.channel.send(embeddd);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki üyeleri sayar.",
  usage: "!say",
  kategori: "moderasyon"
};
