import Telegraf, { Markup, Extra } from "telegraf"
import dotenv from "dotenv"

dotenv.config({ path: ".env" })

const token: string = process.env.TG_TOKEN !== undefined ? process.env.TG_TOKEN : ""
const bot: any = new Telegraf(token)

let sendMessage: any = () => {
	let chat: string = "483706003"
	let message: string = "Wil jij meer weten over je videokaart"
	let parse: string = "Markdown"
	bot.telegram.sendMessage(chat, message, { parse_mode: parse })
}

let interval: any
let sendMsg: any = () => {
	interval = setInterval(sendMessage, 10000)
}
sendMsg()

bot.on("text", (ctx: any) => {
	return ctx.reply(`Echo: ${ctx.message.text}`)
})

bot.launch()
