// const EventEmitter = require('events');
const fs = require('fs');

const reader = fs.createReadStream('./file.txt');

const onData = chunk => {
  for (const char of chunk.toString()) {
    console.log(char);
  }
};
const finishData = () => console.log('File readed successfully!');

reader.on('data', onData);
reader.on('end', finishData);
reader.on('err', err => console.log(err));
