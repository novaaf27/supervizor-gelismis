const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var yazı = db.fetch(`oynuyor_`, yazı) 

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [

        "Tüm Komutları görmek için: c!yardım",
         "CodEming..",
         "Kodları Görmek için: c!js",
         "Süper komutlar yakında!"  
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/rammus53");  //reklam değil xd
        }, 2 * 3000);
}
