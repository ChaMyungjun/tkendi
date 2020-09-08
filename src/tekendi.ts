import { k_number, ping, t_number, k_local, help } from './container';
import { embed } from './discord_util';

const prefix = '!';

const index = async (msg: any, client: any) => {
  if (msg.channel.type === 'dm') return;
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content === `${prefix}ping`) {
    await ping(msg, client, embed(msg));
  } else if (msg.content === `${prefix}korea`) {
    await k_number(msg, client, embed(msg));
  } else if (msg.content === `${prefix}today`) {
    await t_number(msg, client, embed(msg));
  } else if (msg.content === `${prefix}local`) {
    await k_local(msg, client, embed(msg));
  } else if (msg.content === `${prefix}help`) {
    await help(msg, client, embed(msg));
  }
};

export default index;
