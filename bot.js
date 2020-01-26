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