const { EventEmitter } = require('events');

const emitter = new EventEmitter();

const logsPrinter = (...args) => {
  console.log(args.join(', '));
};

emitter.on('log', logsPrinter);

emitter.emit('log', 'first', 'second', 'third');
