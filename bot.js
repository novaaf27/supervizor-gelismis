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
  http.get(`http://placebot.glitch.me/`);
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



client.on("channelDelete", async(channel) => {
  let ozellik = await db.fetch(`aktif_${channel.guild.id}`);

  if(!ozellik) return
  
  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
if(entry.executor.id === ayarlar.sahip) return
if(entry.executor.id === '622321405958160390') return
  channel.guild.ban(entry.executor, {reason: 'CodEming saldırı koruma sistemine yakalandın..Bye!'})


channel.guild.createChannel(channel.name, {type: channel.type, parent: channel.parentID, userLimit: channel.userLimit, topic: channel.topic, position: channel.position})

let embed = new Discord.RichEmbed()
.setTitle('Saldırı Koruması!')
.setDescription(entry.executor + ' CodEming saldırı korumasına yakalandı sildiği kanal tekrar açıldı..V kullanıcı sunucudan yasaklandı!')
.setColor('RED')
client.channels.get('635026048286982164').send(embed)
})


client.on("channelCreate", async(channel) => {
  
   let ozellik = await db.fetch(`aktif_${channel.guild.id}`);

  if(!ozellik) return
  
  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
if(entry.executor.id === ayarlar.sahip) return
if(entry.executor.id === '622321405958160390') return
 channel.delete()
 
let kontrol = await db.fetch(`acti_${entry.executor.id}`)
if(!kontrol) {
  db.set(`acti_${entry.executor.id}`, 0)
  
}
  
if(kontrol >= 3) {
  channel.guild.ban(entry.executor, {reason: 'CodEming saldırı koruma sistemine yakalandın..Bye!'})
  db.delete(`acti_${entry.executor.id}`) 

let embed = new Discord.RichEmbed()
.setTitle('Saldırı Koruması!')
.setDescription(entry.executor + ' CodEming saldırı korumasına yakalandı açtığı kanal tekrar silindi..Ve kullanıcı sunucudan yasaklandı!')
.setColor('RED')
client.channels.get('635026048286982164').send(embed)
  return
}  
  
  
  db.add(`acti_${entry.executor.id}`, 1)
  
  
})


client.on("roleDelete", async(role) => {
   let ozellik = await db.fetch(`aktif_${role.guild.id}`);

  if(!ozellik) return
  
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
if(entry.executor.id === ayarlar.sahip) return
if(entry.executor.id === '622321405958160390') return
  role.guild.createRole({name: role.name, color: role.color, position: role.position, permissions: role.permissions})
  let kontrol = await db.fetch(`acti2_${entry.executor.id}`)
if(!kontrol) {
  db.set(`acti2_${entry.executor.id}`, 0)
  
}
  
if(kontrol >= 3) {
  role.guild.ban(entry.executor, {reason: 'CodEming saldırı koruma sistemine yakalandın..Bye!'})
  db.delete(`acti_${entry.executor.id}`) 

let embed = new Discord.RichEmbed()
.setTitle('Saldırı Koruması!')
.setDescription(entry.executor + ' CodEming saldırı korumasına yakalandı sildiği roller tekrar açıldı..Ve kullanıcı sunucudan yasaklandı!')
.setColor('RED')
client.channels.get('635026048286982164').send(embed)
  return
}  
  
  
  db.add(`acti2_${entry.executor.id}`, 1)
  
  

  });







client.on('message', async msg => {
    let ozellik = await db.fetch(`kurucu_${msg.guild.id}`);

  if(!ozellik) return
  
 if (msg.content.toLowerCase() === '<@419214688061227009>') {
  
   let uyarı = await db.fetch(`kuyari_${msg.member.id}`)
   
  if(!uyarı) { 
  let embed = new Discord.RichEmbed()
  .setTitle('Bu olamaz...')
  .setColor('RED')
  .setDescription('Sanırsam yasini etiketlemişsin..Ama şu an o etiketlenmek istemiyor.Bu durum seni uyarmamı istediği anlamına geliyor..! devam etmeye sakın kalkma!')
 msg.channel.send(embed)
  
if(!uyarı) {
  db.set(`kuyari_${msg.member.id}`, 0)
}
  db.add(`kuyari_${msg.member.id}`, 1)  
  
 }
 
  if(uyarı == '3') {
  let embed = new Discord.RichEmbed()
  .setTitle('Bu olamaz...')
  .setColor('RED')
  .setDescription('seni uyarmama ramen durmadın..Ama bence bu akdar yeter, **'+msg.member.user.username+ '** in spectator yetkisini adlım.Artık kurucu verene kadar hiçbir kanalı göremeyecek. (kod paylaşımları hariç)')
 msg.channel.send(embed)
  
  db.delete(`kuyari_${msg.member.id}`)  
     msg.member.removeRole('634994577140613151')
  }   
   
 
  
};
});


client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
	ctx.lineWidth = 4;
  ctx.fill()
	ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
	ctx.clip();
  	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('hi', 143,10, 73, 72  );
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'STARKs-güvenlik.png');
    client.channels.get('635032871056441354').send(attachment)
});




client.on('messageDelete', async msg => {
	  if(msg.content.startsWith(prefix)) return;
  if(msg.channel.id == '635032282134085654') return
  if(msg.channel.id == '635032339180814346') return 
  if(msg.author.bot) return;
  if (!msg.guild) return;
  

			var embed = new Discord.RichEmbed()
			.setAuthor(msg.author.tag, msg.author.avatarURL)
      .setTitle('Mesaj Silindi!')
      .addField("Kullanıcı:", `<@!${msg.author.id}>`)
      .addField("Kanal:", `<#${msg.channel.id}>`)
      .addField("Mesaj:", `${msg.content}`)
			.setFooter('CodEming - Log sistemi')
			client.channels.get('635038895741992960').send(embed)
		
	})


client.on('messageUpdate', async (oldMessage, newMessage) => {
 if(oldMessage.channel.id == '635032282134085654') return
  if(oldMessage.channel.id == '635032339180814346') return 
  if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }

    if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;
  let embed = new Discord.RichEmbed()
        .setColor("#0080ff")
        .setAuthor(`Mesaj Güncellendi!`)
        .setThumbnail(oldMessage.author.avatarURL)
        .addField("Gönderen", oldMessage.author.tag, true)
        .addField("Önceki Mesaj", `\`\`\`${oldMessage.content}\`\`\``, true)
        .addField("Şimdiki Mesaj", `\`\`\`${newMessage.content}\`\`\``, true)
        .addField("Kanal", newMessage.channel.name, true)
client.channels.get('635038895741992960').send(embed)
})

client.on("guildMemberAdd", async member => {
let kontrol = await db.fetch(`ototag_${member.guild.id}`)
if(!kontrol) return
if (member.bot === true) return;

 var sonuc = await db.fetch(`ototag_${member.guild.id}`).replace("-uye-", `${member.user.username}`) 
 member.setNickname(sonuc);
 
 
 })


const invites = {};
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

///////oto-rol


client.on("guildMemberAdd", async member => {
  if(member.bot) {
   member.addRole('618715918075428897') 
    return
  }

var authorJoined = new Date(member.joinedTimestamp);
var authorRegistered = new Date(member.user.createdTimestamp);  
  
let sonuc = 300 - member.guild.members.filter(m => !m.user.bot).size
let embed = new Discord.RichEmbed()
.setAuthor(`Sunucuya Katıldı!`, member.user.avatarURL)
.setTitle('<a:hg:632903281148035102>'+ member.user.username)
.setColor('BLUE')
.setDescription('<a:hyper:632905422407335948> Sunucu şu anda; \n **'+member.guild.members.filter(m => m.user.bot).size+'** Bot,  **'+ member.guild.members.filter(m => !m.user.bot).size +'** Kullanıcı içeriyor..Botları saymazsak.. **300** Kişi olmamıza son **'+sonuc+'** Kişi kaldı! :pushpin: ')
.addBlankField()
.addField('__SUNUCU__', '» **javascript** rolüne sahip **'+member.guild.roles.get('634994462707154944').members.size+'** \n » **python** rolüne sahip **'+member.guild.roles.get('634996894833180676').members.size+'** \n » **html** rolüne sahip **'+member.guild.roles.get('635021210413170709').members.size+'** Üye bulunuyor :tada:')
.addBlankField()
.addField('__KULLANICI__', '» Sunucu Katılım Tarihi: **'+authorJoined.toLocaleString()+'** \n » Discord Katılım Tarihi: **'+authorRegistered.toLocaleString()+'**')
.setThumbnail(member.user.avatarURL)
.setFooter('Spectator rolünü verdim.')
.setTimestamp()

let sa = new Discord.RichEmbed()  
.setDescription('Merhaba!, Benim ismim "Yasin", **16** yaşındayım.Kendi kendine kod yazan kod bilgisi olan normal bir insanım :),İnsanlara yardım etmekten zevk alıyordum.Bunun üzerine **"CodEming"** sunucusunu kurdum.Burda insanlara yardım ediyor,İstenen komutları yapıp Kendi kodladığım komutları sunucuda paylaşıyorum.Sunucuma katıldığın için teşekkür ederim.Bir Sorun olursa yetkililerle veya benimle iletişime geçebilirsin.Aşağıya 3 5 soru-cevap bırakıyorum :)')
.addField('istediğim Kodu yapmanı istiyorum ne yapmalıyım?', 'sunucuda ki **"istek-sırası"** kanalına istediğin kod u yazarsan,bot bana iletecektir :*')
 .addField('Sunucuda Neden **"kurallar"** bölümü yok?', 'zaten yapmamanız gereken şeyleri biliyorsunuz, anlayabiliyorsunuz heryere yezmaya gerek var mı?')
 .addField('Sunucuda ki **"hazır komutları"** nasıl görürüm?', '**"#💻bot-komut"** kanalına, **c!js**,**c!html**,**c!py** Yazman yeterli olucaktır.')
 .addField('Yetkili Olabilir miyim?', 'Şu an sunucuda alımlarımız açık >> ꏍ Yasin#1534 << dm atarak katılabilirsin.')
 .addField('**Linkler:**', 'Sınırsız Davet Linkimiz: \n https://discord.gg/Y8fHZPk')
 .setFooter(' Aramızda seni görmekten gurur duyuyoruz.')
 .setColor('RED')  



//////////////////////////////////////////////



member.send(sa) 

  
client.channels.get('635022722287534081').send(embed)

member.addRole('634994577140613151')


  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
let sayısı = db.fetch(`inviter_${inviter.id}`)  
if(!sayısı) {
let kontrol = db.fetch(`aldı_${member.id}`)  
if(kontrol) return
  db.set(`inviter_${inviter.id}`, 0)
}
db.set(`aldı_${member.id}`, member.id)
    db.add(`inviter_${inviter.id}`, 1) 

})
})
client.on("guildMemberRemove", async member => {

  var authorLeaved = new Date(member.leavedTimestamp);
var authorRegistered = new Date(member.user.createdTimestamp);  
  
let sonuc = 300 - member.guild.members.filter(m => !m.user.bot).size
let kontrol = await db.fetch(`çıktı_${member.id}`)

let embed = new Discord.RichEmbed()
.setAuthor(`Sunucudan Ayrıldı!`, member.user.avatarURL)
.setTitle('<a:bb:632903347002671104>'+ member.user.username)
.setColor('RED')
.setDescription('<a:hyper:632905422407335948> Sunucu şu anda; \n **'+member.guild.members.filter(m => m.user.bot).size+'** Bot,  **'+ member.guild.members.filter(m => !m.user.bot).size +'** Kullanıcı içeriyor..Botları saymazsak.. **300** Kişi olmamıza son **'+sonuc+'** Kişi kaldı! :pushpin: ')
.addBlankField()
.addField('__SUNUCU__', '» **javascript** rolüne sahip **'+member.guild.roles.get('634994462707154944').members.size+'** \n » **python** rolüne sahip **'+member.guild.roles.get('634996894833180676').members.size+'** \n » **html** rolüne sahip **'+member.guild.roles.get('635021210413170709').members.size+'** Üye bulunuyor :tada:')
.addBlankField()
.addField('__KULLANICI__', '» Sunucudan Ayrılım Tarihi: **'+authorLeaved.toLocaleString()+'** \n » Discord Katılım Tarihi: **'+authorRegistered.toLocaleString()+'**')
.setThumbnail(member.user.avatarURL)
.setFooter('BayBay! :(')
.setTimestamp()
client.channels.get('635022722287534081').send(embed)


})
//////////////////////////////////////////////////sayaç





client.on('message', msg => {
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.id === '635028934123061258') { 
    if(msg.author.id === ayarlar.sahip) return
    if(msg.author.bot) return
  
    
      const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle('Yeni İstek Bildirisi!')
      .addField(`» İstek:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | İstek Sistemi`)
      .setTimestamp()
client.channels.get('635026802594545665').send(embed)
      msg.delete()
     

  }
});



////////////////////////
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