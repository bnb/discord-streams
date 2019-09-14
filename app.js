const Discord = require('discord.js')
const twitchUtil = require('./lib/twitchUtil')

const client = new Discord.Client()
const discordToken = ''

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (message) => {
  const commandStrings = {
    notify: '!notify'
  }
  if (message.content.startsWith(`${commandStrings.notify}`)) {
    const possibleUsername = message.content.slice(commandStrings.notify.length + 1)
    twitchUtil(possibleUsername, (streamData) => {
      message.reply(`${streamData.link}`)
    })
  }

  if (message.content === '!help') {
    message.reply('Here are a list of commands!\n!sub url - subscribes to a streamer\n!help - Displays the command list')
  }
})

client.login(discordToken)
