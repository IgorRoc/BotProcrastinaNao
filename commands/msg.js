const Discord = require("discord.js")
const emojis = require("../emojis.json")

module.exports.run = async (bot, message, args) => {
	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando MSG`
	)

	if (!message.member.hasPermission("ADMINISTRATOR")) {
		const naoDigno = new Discord.MessageEmbed()
			.setColor("#FF0000")
			.setTitle("Você não é digno de realizar esse comando!")

		message.reply(naoDigno)
		message.channel.send(
			"https://tenor.com/view/batman-winger-wag-not-allowed-no-nope-gif-5433518"
		)
		console.log(`↳ Acesso negado para '${message.author.username}'`)
		return
	}

	let [canal] = args
	if (!canal) {
		return message.channel.send("Faltam argumentos.").then((m) => {
			m.delete({ timeout: 3000 })
		})
	}
	if (canal.length > 18) {
		canal = canal.slice(2, 20)
	}

	if (!bot.channels.cache.get(canal)) {
		message.channel.send("Canal não encontrado.").then((m) => {
			m.delete({ timeout: 3000 })
		})
		console.log(`↳ Canal '${canal}' não encontrado.`)
	} else {
		let msg = args.slice(1).join(" ")
		for (let k in emojis) {
			let re = new RegExp(`:${k}:`, "g")
			msg = msg.replace(re, emojis[k])
		}
		if (!msg) {
			return message.channel.send("Envie uma mensagem")
		}
		bot.channels.cache.get(canal).send(msg)
	}
	message.delete()
}

module.exports.config = {
	name: "msg",
	description: "Envia a mensagem desejada para o canal especificado!",
	usage: ".msg [id_do_canal] [mensagem]",
	accessableby: "Moderadores",
	aliases: ["say", "mensagem"],
}
