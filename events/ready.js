const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [];
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
  }, 5000);

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.channels.get("672423245353582602").join();
  client.user.setStatus("online");
  client.user.setActivity(`KAYIT BOT`, { type: "WATCHING" });
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Oyun ismi ayarlandı!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şu an ` +
      client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
};
