const sentence1 = 'I Love New York';
const sentence2 = 'I Love Tel Aviv';
const sentence3 = 'I Love Istanbul';

const getRandomNumber = () => Math.floor(Math.random() * 4000) + 3000;

const writeToDoc = (sentence) => document.write(sentence + '<br/>');

setTimeout(() => writeToDoc(sentence1), getRandomNumber());
setTimeout(() => writeToDoc(sentence2), getRandomNumber());
setTimeout(() => writeToDoc(sentence3), getRandomNumber());
