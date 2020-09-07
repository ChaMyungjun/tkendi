require('dotenv').config()
import Discord, { Client } from 'discord.js';
import tkendi from './tekendi'
import { embed } from './discord_util';

const PREFIX = '!';

const client = new Client({disableMentions: "everyone"});

client.on('guildCreate', guild => {
  console.log('Joining Server')
})

//client part
client.on('ready', () => {
  console.log(`Bot is started, with ${client.user?.username}`)
})

client.on('warn', (info) => {
  console.log(info)
})
client.on('error', console.error)

client.on('message', async (msg: any) => {
  await tkendi(msg, client)
});

client.login(process.env.BOT_TOKEN)
