const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
   
  var embed2 = new Discord.RichEmbed()   
      .setTitle('Merhaba,' + message.member.user.username)
      .setDescription('Anlaşılan yetkin olmayan komutlarımı denemeye çalışıyorsun, Sana kötü bir haberim olucak.. **"REBOOT"** Komutunu kullanman, \n ||ENGELLİ! :name_badge: || <a:a:599680579382018100> ')
      .setColor('RED') 
  

  if(message.author.id !== "419214688061227009") return message.channel.sendEmbed(embed2)
     
   let sonuc = bot.ping + 30
  
  var embed = new Discord.RichEmbed()   
      .setTitle('**Merhaba Sahibim,**')
      .setDescription('Beni yeniden başlatman,şu anki **' + bot.ping + ' ms** Olan pingimi, **' + sonuc + ' ms** Değerine getirecek. \n Yinede eminsen benim için şu aşağıdaki **TİK** işaretine, bir kere dokunur musun?')
      .setThumbnail('https://productimages.hepsiburada.net/s/10/432/8887494311986.jpg')
      .setColor('#FF00C9')
message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => sentEmbed.edit("İşlemi iptal ettim sahibim. :heartpulse: "));
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
message.channel.send('işlem onaylandı! ')
    
          
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  
     
        }
    })
})

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'reboot',
  usage: 'reboot'
};