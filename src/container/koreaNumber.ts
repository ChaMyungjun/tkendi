import { korea } from '../api/data';

const k_number = async (msg: any, client: any, embed: any) => {
  const data = await korea();
  const numberField = embed;

  numberField
    .setDescription('국내 총 합계')
    .addFields(
      { name: '기준일시', value: `${data.Date.slice(0, 13)}시` },
      { name: '확진자', value: `${data.numbers.DPN}명`, inline: true },
      { name: '격리자', value: `${data.numbers.IPN}명`, inline: true },
      { name: '사망자', value: `${data.numbers.Death}명`, inline: true },
    );
  await msg.channel.send(numberField);
};

export default k_number;
