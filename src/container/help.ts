const help = async (msg: any, client: any, embed: any) => {
  const field = embed;

  field
    .addFields(
      { name: '국내 총 합', value: '!koera' },
      { name: '국내 지방자치단체 합', value: '!local' },
      { name: '국내 하루 합계', value: '!today' },
    )
    .setTitle('tkendi help');
  await msg.channel.send(field);
};

export default help;
