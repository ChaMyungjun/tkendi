const help = async (msg: any, client: any, embed: any) => {
  const field = embed;

  field
    .setTitle('tkendi help text')
    .addField(
      '!today같은 명령어로 국내 하루 covid-19 신규 확진자 수를 알려줍니다.',
    );
  await msg.channel.send(field);
};

export default help;
