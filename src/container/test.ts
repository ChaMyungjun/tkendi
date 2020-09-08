import { Message } from 'discord.js';

const quiz = require('../quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = (response: any) => {
  return item.answers.some(
    (answer: any) => answer.toLowerCase() === response.content.toLowerCase(),
  );
};

const test = async (msg: any, client: any, embed: any) => {
  msg.channel.send(item.question).then(() => {
    msg.channel
      .awaitMessages(filter, { max: 1, time: 3000, erros: ['time'] })
      .then((collected: any) => {
        msg.channel.send(`${collected.first().author} got the correct answer`);
      })
      .catch((collected: any) => {
        msg.channel.send('Looks like nobody got the answer this tiem');
      });
  });
};

export default test;
