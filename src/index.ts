require('dotenv').config()
import Discord from 'discord.js';
import tkendi from './tekendi'
import { embed } from './discord_util';

const client = new Discord.Client();
const prefix = '!';

client.on('guildCreate', guild => {
  console.log('Joining Server')
})

client.on('ready', () => {
  console.log(`Bot is started, with ${client.user?.username}`)
})

client.on('message', async (msg: any) => {
  await tkendi(msg, client)
});

client.login(process.env.BOT_TOKEN)
