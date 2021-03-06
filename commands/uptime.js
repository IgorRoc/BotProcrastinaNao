const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando Uptime`
	)

	let up = ms(bot.uptime, { long: true })
	up = up.replace("second", "segundo")
	up = up.replace("seconds", "segundos")
	up = up.replace("minute", "minuto")
	up = up.replace("minutes", "minutos")
	up = up.replace("hour", "hora")
	up = up.replace("hours", "horas")
	up = up.replace("day", "dia")
	up = up.replace("days", "dias")
	up = up.replace("week", "semana")
	up = up.replace("weeks", "semanas")

	const embed = new Discord.MessageEmbed()
		.setColor("#64B3E3")
		.setTitle("\\🎉 Up Time")
		.setDescription(
			`Estou trabalhando há **${up}** sem acidentes no **ProcrastinaNão**!`
		)
		.setTimestamp()

	message.channel.send(embed)
	console.log(`↳ Uptime: ${up}`)
}

module.exports.config = {
	name: "uptime",
	description: "Informa o tempo que eu estou online!",
	usage: ".uptime",
	accessableby: "Membros",
	aliases: ["up"],
}
