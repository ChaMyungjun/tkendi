import { time } from 'console';

const ping = async (msg: any, client: any, embed: any) => {
  let pingFeild = embed;
  const tkendi_ping = client.ws.ping;
  pingFeild.setTitle('Pong!').setDescription('Discord Server Ping!').addFields(
    {
      name: `tkendi's ping`,
      value: `tkendi's ping...`,
      iniline: true,
    },
    {
      name: `Latency Ping`,
      value: `Latency Ping...`,
      inline: true,
    },
  );
  const latency = await msg.channel.send(pingFeild);
  pingFeild.fields = [];
  pingFeild.addFields(
    { name: `tkendi's ping`, value: `${Math.round(tkendi_ping)}ms` },
    {
      name: 'Latency ping',
      value: `${latency.createdTimestamp - msg.createdTimestamp}ms`,
    },
  );
  latency.edit(pingFeild);
};

export default ping;
