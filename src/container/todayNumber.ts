import { today } from '../api/data';

const t_number = async (msg: any, client: any, embed: any) => {
  const data = await today();
  const numberField = embed;

  numberField.setDescription('국내 하루 합계').addFields(
    { name: '기준일시', value: `${data.Date}명` },
    { name: '확진자', value: `${data.numbers.DPN}명`, inline: true },
    { name: '지역감염', value: `${data.numbers.Local}명`, inline: true },
    {
      name: '10만명당 발생 비율',
      value: `${data.numbers.Rate}%`,
      inline: true,
    },
  );
  await msg.channel.send(numberField);
};

export default t_number;
