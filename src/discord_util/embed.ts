import discord from 'discord.js';

const embed = (msg: any) => {
  return new discord.MessageEmbed()
    .setTitle('Covid-19')
    .addFields({name: 'Error', value: '잘못입력하신거 같아요'})
    .setColor('#0F4C81')
    .setTimestamp(new Date())
    .setFooter(msg.member.displayName, msg.author.avatarURL());
};

export default embed;
