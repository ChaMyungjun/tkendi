import { k_number, ping, t_number, k_local } from './container';
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
    console.log(msg)
    if ((msg.content).indexOf(prefix) != -1) {
      console.log('return');
    } else {
      const number = msg.content.slice();
      console.log(number);
    }
  }
};

export default index;
