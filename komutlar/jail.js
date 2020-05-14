////////////////////////////////////////////
let rolid = "703504240819306576"; // BURAYA KULLANICININ TÜM ROLLERİ ALINDIKTAN SONRA VERİLECEK ROLÜN İDSİNİ YAZIN , YAZMAZSANIZ TÜM ROLLERİ ALIR SADECE. 
///////////////////////////////////////////
exports.run = async (client, message, args) => {
  if (!message.member.roles.has("709809776720216207"))//Bu komutu kullanıcak kişinin ıdsini yazın.
    return message.channel.send(
      `Bu komutu kullanabilmek için <@&707665608527052881> yetkisine sahip olmasınız.`//Bu komutu kullanıcak kişinin ıdsini yazın.
    );
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**Yetkin yok.**");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("**Jail Atılacak Üyeyi Etiketleyin**");
    if(rolid.match(/(\d{17,19})/g)) {
        member.roles.forEach(role => member.removeRole(role));
        member.addRole(rolid);
    }
    else member.roles.forEach(role => member.removeRole(role));
    return message.channel.send(`**Kullanıcının tüm rolleri ${rolid.match(/(\d{17,19})/g) ? `alınıp \`${message.guild.roles.get(rolid).name}\` rolü verildi.**` : 'alındı.**'}`);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["jail"],
    permLevel: 0
};

exports.help = {
    name: "jail",
    description: 'Kullanıcıyı jaillersiniz.',
    usage: '!jail <kullanıcı>'
};