const EventEmitter = require('events');
const uuid = require('uuid');

// uuid generates a random id
//console.log(uuid.v4());

// Creates an emitter class and adds a method
class Logger extends EventEmitter{
    id() {
        //Call event
        this.emit('ramdonId', {id: uuid.v4()})
    }
    msg(msg) {
        //Call event
        this.emit('message', msg)
    }
};

module.exports = Logger;