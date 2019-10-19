const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let uzunuluk = args.slice(0).join(' ');
    var mesaj = db.set(`tagM_${message.guild.id}`, uzunuluk)
  var mesaj2 = db.fetch(`tagM_${message.guild.id}`)
    let tag = args.slice(0).join(' ')


    
    const embed = new Discord.RichEmbed()
    .setTitle("Başarılı")
    .setDescription(`Test Durumu:; \`${uzunuluk}\``)
    .setColor("RANDOM")
    message.channel.send(embed)
}

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['tst'], 
  permLevel: 4
};

exports.help = {
  name: 'test12',
  description: 'test', 
  usage: 'test'
};
