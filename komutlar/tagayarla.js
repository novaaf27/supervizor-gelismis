const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { //komut dosyasının içindeki bileşenler
  
  
 let hata2 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' Sunucu tagını ayarlamak için,**"ADMINISTRATOR"**,yetkisine sahip olman gerekiyor.!')
 .setColor('RED')

  let hata3 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' sunucu tagını belirtmen gerekiyor.')
 .setColor('RED')
 
    let hata4 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' Kullanıcı tag ı aldığında hangi rolü verecek?')
 .setColor('RED')
  
      let hata5 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' Tag alım kayıtları nereye atılacak?')
 .setColor('RED')  

  
  if(!args[0]) return message.channel.sendEmbed(hata3)

  
  
  var basarılı = new Discord.RichEmbed()
  .setTitle('Başarılı!')
  .setDescription('Tag,verilecek rol,kanal başarıyla ayarlandı! \n Gerekli bilgiler aşağıda:')
  .addField('**Tag:**', args[0])
  message.channel.send(basarılı)


    db.set(`tag_${message.guild.id}`, args[0])
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  //komut aktif mi?
  guildOnly: false, 
  aliases: ['t'], //başka kullanım şekilleri
  permLevel: 3 //prem leveli
};

exports.help = {
  name: 'tag', // komut ismi 
  description: 'tag ayarla', //komut açıklaması
  usage: 'tag' //komut kullanım şekili
};
