import { k_city } from '../api/data';

const k_local = async (msg: any, client: any, embed: any) => {
  const data = await k_city();
  const setData = data.k_city;
  const field = embed;

  field.addField('Create Date', data.Date[18]);
  for (const key in setData) {
    field.setTitle('국내 광역지방자치단체').addFields({
      name: `${Number(key) + 1}. ${setData[key]}`,
      value: `확진자: ${data.numbers.DPN[key]} \n`,
    });
  }

  msg.channel.send(field).then(() => {
    msg.channel.awaitMessages(null, {max: 1, time: 60000, errors: ['tiem']})
    .then((collected: any) => {
      // msg.channel.sned(`${collected.first()}`)
      console.log(collected)
    })
    .catch((error: any) => {
      msg.channel.send(`Error!! 값을 이력하지 않았습니다`)
      console.log(error)
    })
  })
};

export default k_local;
