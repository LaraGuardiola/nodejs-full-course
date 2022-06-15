const EventEmitter = require('events').EventEmitter;

//*CUSTOM EVENTS
const customEmitter = new EventEmitter()

//sets the event
customEmitter.on('response', (name, id) => {
    console.log(`${name} has id ${id}`)	
})

//emits the event
customEmitter.emit('response', 'Serj', 123)