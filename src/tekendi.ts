import { w_city } from './api/data';
import { k_number, ping, t_number, k_local, help, w_local } from './container';
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
  } else if (msg.content.includes('k_local')) {
    await k_local(msg, client, embed(msg));
  } else if (msg.content.includes('help')) {
    await help(msg, client, embed(msg));
  } else if(msg.content.includes('w_local')) {
    await w_local(msg, client, embed(msg));
  }
};

export default index;
