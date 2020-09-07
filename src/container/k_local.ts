import { k_city } from '../api/data';

const k_local = async (msg: any, client: any, embed: any) => {
  const data = await k_city();
  const setData = data.k_city;
  const field = embed;
  for (const key in setData) {
    field.setTitle('국내 광역지방자치단체').addFields({
      name: `${Number(key) + 1}. ${setData[key]}`,
      value: `${data.cn_name[key]} \n ${data.en_name[key]} \n 확진자: ${data.numbers.DPN[key]} \n`,
    });
  }
  msg.channel.send(field);
};

export default k_local;
