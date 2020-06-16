const Discord = require("discord.js")
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    console.log(`■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando UserInfo`)
    
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("Informações de Usuário")
    .setThumbnail(message.guild.iconURL)

    if(args){
        let user = message.mentions.users.first()
        if(!user){
            message.channel.send(`Ocorreu um erro ao encontrar o usuário mencionado.`)
            console.log(`↳ Usuário "${args}" não encontrado, operação cancelada.`)
            return
        }
        uEmbed.setAuthor(`Info ${user.username}`, user.displayAvatarURL)
        .addField("**Nome:**", `${user.username}`, true)
        .addField("**Tag:**", `${user.discriminator}`, true)
        .addField("**ID:**", `${user.id}`, true)
        .addField("**Status:**", `${user.presence.status}`, true)
        .addField("**Desde:**", `${user.createdAt}`, true)
    }else{
        uEmbed.setAuthor(`Info ${message.author.username}`, message.author.displayAvatarURL)
        .addField("**Nome:**", `${message.author.username}`, true)
        .addField("**Tag:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Desde:**", `${message.author.createdAt}`, true)
    }
    
    
    
    uEmbed.setFooter(`Anti-Procrastinador`, bot.user.displayAvatarURL);

    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "userinfo",
    description: "Mostra as suas informações ou as do usuário mencionado!",
    usage: ".userinfo (@mention)",
    accessableby: "Membros",
    aliases: ["ui"]
}