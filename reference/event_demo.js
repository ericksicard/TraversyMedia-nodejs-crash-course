const EventEmitter = require('events');

// 1- Create an emitter class
class MyEmitter extends EventEmitter {};

// 2- Init object
const myEmitter = new MyEmitter();

// 3- Initiallize the Event listener
myEmitter.on('event', () => console.log('Event Fired!') )

// 4- Emit event
myEmitter.emit('event')