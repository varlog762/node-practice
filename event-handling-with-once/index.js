const { EventEmitter } = require('events');

const emitter = new EventEmitter();

const start = () => console.log('Start!');
const finish = () => console.log('Finish!');

emitter.once('start', start);
emitter.on('finish', finish);

emitter.emit('start');
emitter.emit('start');
emitter.emit('finish');
