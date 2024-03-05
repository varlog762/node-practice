const { EventEmitter } = require('events');

const emitter = new EventEmitter();

const greet = name => console.log(`Hello, ${name}!`);

emitter.on('greet', greet);
emitter.emit('greet', 'Gregory');
