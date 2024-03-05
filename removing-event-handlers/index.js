const { EventEmitter } = require('events');

const emitter = new EventEmitter();

const firstHandler = () => {
  console.log("I'm first handler!");
};

const secondHandler = () => {
  console.log("I'm second handler!");
};

const thirdHandler = () => {
  console.log("I'm third handler!");
};

emitter.on('someEvent', firstHandler);
emitter.on('someEvent', secondHandler);
emitter.on('someEvent', thirdHandler);

emitter.emit('someEvent');

emitter.off('someEvent', secondHandler);

emitter.emit('someEvent');

emitter.removeAllListeners('someEvent');

emitter.emit('someEvent');
