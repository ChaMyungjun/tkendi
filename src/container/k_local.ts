import { k_city } from '../api/data';

const k_local = async (msg: any, client: any, embed: any) => {
  const data = await k_city();
  const setData = data.k_city;
  const field = embed;

  const filter = (res: any) => {
    let k_data = null;
    console.log(res.content)
    for (const key in setData) {
      if ((<any>setData)[key] === res.content) {
        field
          .setTitle('국내 광역지방자치 단체')
          .addFields(`${res.content}`, `${(<any>data.numbers.DPN)[key]}`);

        k_data = (<any>data.numbers.DPN)[key];
      } else {
        k_data = null
        msg.reply('다시 입력하라고!')
      }
    }

    msg.channel.send(field);
    return k_data;
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
        console.log(collected);
      })
      .catch((error: any) => {
        msg.reply('Time out!');
      });
  });
};

export default k_local;
