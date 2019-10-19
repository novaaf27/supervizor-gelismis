
//if ([ayarlar.token].includes(code)) return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
	if(message.author.id !== "419214688061227009") return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
  if (message.author.id === "419214688061227009") {
		try {
let codein = args.join(" ");
let code = eval(codein)
      
      if (codein.length < 1) return message.channel.send(`:x: Bir kod girmelisin.`)
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
    let embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .addField('Kod Girişi', `\`\`\`js\n${codein}\`\`\``)
    .addField('Kod Çıkışı', `\`\`\`js\n${code}\n\`\`\``)
    message.channel.send(embed)
  } catch(e) {
    let embed2 = new Discord.RichEmbed()
    .setColor('BLUE')
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
  }
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};

