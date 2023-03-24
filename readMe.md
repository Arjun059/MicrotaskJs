# MicrotaskJs
## microtaskJs enable you to use microtask-queu in node js .


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/Arjun059/MicrotaskJs)

Microtask js add your promise in microtask-queu. this Lib Execute your  promise concurrently manner.
more better way to use promise with then method. Fast Code Better Performace. 
Benefit of concurrently programing 

## Features

- Serialization of then method
- Run many task at a time. Benifit of concurrently programing.
- Handling Error Gressfully
- Small Plugin just few line of code

###### MicrotaskJs is a lightweight Plugin Just few line of code. 


## Installation

MicrotaskJs requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```
npm i microtaskjs
```
 &nbsp; &nbsp; &nbsp; or
```
yarn add microtaskjs
```


## Usage

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.
```
const Microtask = require("microtaskjs");

function Asynctask() {
    return new Promise(async (next) => {

    let tasks = 3 // total tasks
    let { data, event, error } = new MicroTask(tasks); 
    // data a promies , errror if error occur, event pass data to the event
   
    DB.findUser().then((data) => { // use then for promise 
    event.emit("done", {user: data})  
    })
    DB.findProducts().then((data) => event.emit("done", {products: data}))
    DB.findPosts().then((data) => event.emit("done", {posts: data}))

    data.then((data) => {
        next(data) 
    })
  })
}

```

## Development

Want to contribute? Great! 
[github](https://github.com/Arjun059/MicrotaskJs) Account Feel Free To Connect


## License

MIT

**Free Software**