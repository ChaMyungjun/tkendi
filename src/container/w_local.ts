import { w_city } from '../api/data';

const w_local = async (msg: any, client: any, embed: any) => {
  const data = await w_city();
  const field = embed;

  const filter = (res: any) => {
    let w_data = null;
    console.log(res.content);
    for (const keys in data.w_city) {
      if ((<any>data.w_city)[keys] === res.content) {
        field.setTitle(`${res.content} 확진자 수`).addFields(
          { name: '기준일시', value: `${data.Date[keys]}` },
          {
            name: `${res.content}`,
            value: `현재 확진자: ${data.numbers.DPN[keys]}명`,
          },
        );
        w_data = (<any>data.numbers.DPN)[keys];
        console.log(w_data);
      }
    }
    msg.channel.send(field);
    return res.content;
  };

  msg.channel.send('나라를 입력해주세요').then(() => {
    msg.channel
      .awaitMessages(filter, { max: 1, time: 6000, error: ['time'] })
      .catch((error: any) => {
        msg.reply('Time out!');
      });
  });
};

export default w_local;
