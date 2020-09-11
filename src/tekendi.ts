import { k_number, ping, t_number, k_local, help, test } from './container';
import { embed } from './discord_util';

const prefix = `!`;

const index = async (msg: any, client: any) => {
  if (msg.channel.type === 'dm') return;
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.includes('ping')) {
    await ping(msg, client, embed(msg));
  } else if (msg.content.includes('korea')) {
    await k_number(msg, client, embed(msg));
  } else if (msg.content.includes('today')) {
    await t_number(msg, client, embed(msg));
  } else if (msg.content.includes('local')) {
    await k_local(msg, client, embed(msg));
  } else if (msg.content.includes('help')) {
    await help(msg, client, embed(msg));
  } else if (msg.content.includes('test')) {
    await test(msg, client, embed(msg));
  }
};

export default index;
