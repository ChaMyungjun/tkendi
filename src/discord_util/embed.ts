import discord from 'discord.js';

const embed = (msg: any) => {
  return new discord.MessageEmbed()
    .setTitle('Covid-19')
    .setDescription('명령어를 잘못 입력하신듯')
    .setColor('#0F4C81')
    .setTimestamp(new Date())
    .setFooter(msg.member.displayName, msg.author.avatarURL());
};

export default embed;
