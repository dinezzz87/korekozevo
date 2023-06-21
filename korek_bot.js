const { Telegraf } = require('telegraf')

const bot = new Telegraf('5107399241:AAF3RbGkk-7lBNU4plOnH_elbl1NreMqFDI')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()