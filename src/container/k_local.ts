import { k_city } from '../api/data';

const k_local = async (msg: any, client: any, embed: any) => {
  const data = await k_city();
  const setData = data.k_city;
  const field = embed;

  const filter = ((res: any) => {
    return console.log(res.content)
  })

  field.addField('Create Date', data.Date[18]);
  for (const key in setData) {
    field.setTitle('국내 광역지방자치단체').addFields({
      name: `${Number(key) + 1}. ${setData[key]}`,
      value: `확진자: ${data.numbers.DPN[key]} \n`,
    });
  }

  msg.channel.send(field).then(() => {
    msg.channel
      .awaitMessages(filter, { max: 1, time: 6000, error: ['time'] })
      .then((collected: any) => {
        msg.channel.send(`${collected}`);
      })
      .catch((error: any) => {
        msg.channel.send('Erorr!');
      });
  });
};

export default k_local;
