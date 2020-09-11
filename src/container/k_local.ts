import { k_city } from '../api/data';

const k_local = async (msg: any, client: any, embed: any) => {
  const data = await k_city();
  const setData = data.k_city;
  console.log(data);
  const field = embed;

  const filter = (res: any) => {
    let k_data = null;
    console.log(res.content);
    for (const key in data.k_city) {
      if ((<any>setData)[key] === res.content) {
        field.setTitle('국내 광역지방자치 단체').addFields(
          { name: '기준일시', value: `${data.Date[key]}` },
          {
            name: `${res.content}`,
            value: `오늘 확진자:${data.numbers.DPN[key]}명`,
          },
        );
        k_data = (<any>data.numbers.DPN)[key];
      }
    }
    msg.channel.send(field);
    return res.content;
  };

  msg.channel.send('국내 광역지방자치 단체를 입력해줘').then(() => {
    msg.channel
      .awaitMessages(filter, { max: 1, time: 6000, error: ['time'] })
      .catch((error: any) => {
        msg.reply('Time out!');
      });
  });
};

export default k_local;
