import { k_city } from '../api/data';

const k_local = async (msg: any, client: any, embed: any) => {
  const data = await k_city();
  const setData = data.k_city;
  const field = embed;

  const filter = (res: any) => {
    console.log(res.content);
    return res.content;
  };

  // field.addField('Create Date', data.Date[0]);

  // const k_city_picker = msg.channel.send('국내 광역지방자치 단체를 입력해줘!')

  // for (const key in setData) {
  //   field.setTitle('국내 광역지방자치단체').addFields({
  //     name: `${Number(key) + 1}. ${setData[key]}`,
  //     value: `확진자: ${data.numbers.DPN[key]} \n`,
  //   });
  // }

  msg.channel.send('국내 광역지방자치 단체를 입력해줘').then(() => {
    msg.channel
      .awaitMessages(filter, { max: 1, time: 6000, error: ['time'] })
      .then((collected: any) => {
        console.log(collected.content)
        msg.channel.send(`${collected}`);
      })
      .catch((error: any) => {
        msg.reply('Time out!');
      });
  });
};

export default k_local;
