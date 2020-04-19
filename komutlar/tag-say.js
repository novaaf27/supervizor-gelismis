module.exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let sayılcak_tag = '♥';
  message.guild.members.forEach(member => {
    if(member.user.username.includes(sayılcak_tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.reply(`Ailemizde Şuan **${tagdakiler}** kişi var!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: '!tagsay',
};