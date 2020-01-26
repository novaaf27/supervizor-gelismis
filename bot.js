const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require('jimp');
const db = require('quick.db');
const Canvas = require('canvas')
const ms = require('parse-ms')
const moment = require('moment');
require('./util/eventLoader')(client);

///////////
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200)
  //response.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://swerve-register.glitch.me/`);
}, 10000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


////////////////////////
//////////////////////////

client.on('ready', ()=>{
client.channels.get('670979904027754507').join()
})

//////////////////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

/////////////////////////////////////
///////////////////////////////////////////////////

client.on("userUpdate", async(old, nev) => {
let emingSunucu = "590108657065132032" //Sunucu ID
let emingKanal = "651121702444728344" //BILGI KANAL ID
let emingRol = "610240016031023104" //ROL ID
let emingTag = "ֆ" //TAG 
if(old.username !== nev.username) {
  
if(nev.username.includes(emingTag) && !client.guilds.get(emingSunucu).members.get(nev.id).roles.has(emingRol)) {
      client.channels.get(emingKanal).send(`<a:emoji_33:619891578370261013> **${nev}, İsmine \`${emingTag}\` eklediği için Tag rolünü kazandı.** <a:emoji_33:619891578370261013>`) 
      client.guilds.get(emingSunucu).members.get(nev.id).addRole(emingRol)
     }
  if(!nev.username.includes(emingTag) && client.guilds.get(emingSunucu).members.get(nev.id).roles.has(emingRol)) {
     client.guilds.get(emingSunucu).members.get(nev.id).removeRole(emingRol)
     client.channels.get(emingKanal).send(`:anger: **${nev}, İsminden \`${emingTag}\`'ı çıkardığı için Tag rolünü kaybetti.**`)
    } 
     
  }
  });

///////////////////////////////////////////////////

/////////////////////////////////////////////////////

client.on("guildMemberAdd", (member, message) => {
if(member.guild.id !== "590108657065132032") return; //sunucu ıd
 let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
  let aylar = aylartoplam 
  let rol = "671015389798465536"
let user = client.users.get(member.id);
require("moment-duration-format");
let eskiNick = member.user.username;
const id = "618802507203870720" //kanal ıd
const channel  = member.guild.channels.get(id);
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
    if (gün < 7) kontrol = 'Güvenilir Değil!'
    if (gün > 7) kontrol = 'Güvenilir Gözüküyor!'   
channel.send(`<a:aad:652150016462290947> Hoşgeldin ${member} seninle ${member.guild.members.size} kişiyiz! <a:aad:652150016462290947> \n\n <a:loading:653122702030405632> Kaydının yapılması için sesli odaya gelip ses vermen gerekli. <a:loading:653122702030405632>\n\n <a:aacc:652153904926162974> Hesap Kuruluş Zamanı: ${moment(user.createdAt).format('DD')} ${aylar[moment(user.createdAt).format('MM')]} ${moment(user.createdAt).format('YYYY HH:mm:ss')} <a:aacc:652153904926162974> \n\n Bu Kullanıcı: ${kontrol}\n\n <@&671015389798465536> Rolündeki yetkililer seninle ilgilenecektir.`)
})

//////////////////////////////////////////////////////