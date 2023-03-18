// let events = require('events')
// const eventEmitter = new events.EventEmitter(); 

const MicroTask = require("./microtask")
   
const DB = {
 findUser : () => {
    return new Promise((next) => {
        setTimeout(() => {
            next({id: 1, name: "DJ"})
        }, 2000)
    })
},
 findProducts : () => {
    return new Promise((next) => {
        setTimeout(() => {
            next([{name: "Flower"}, {name: "Benten Watch"}, {name: "Cool Shoes"}])
        }, 3000)
    })
 },
 findPosts: () => {
    return new Promise((next) => {
        setTimeout(() => {
            next([{title: 'Hello Minni' }, {title: "Hello Piggi"}, {title: "Hello Gimmi"}])
        }, 3000)
    })
 }
}


function Asynctask() {
    return new Promise(async (next) => {

    let tasks = 3
    let { data, event, error } = MicroTask(tasks);
   
    DB.findUser().then((data) => event.emit("done", {user: data}))
    DB.findProducts().then((data) => event.emit("done", {products: data}))
    DB.findPosts().then((data) => event.emit("done", {posts: data}))

    data.then((data) => {

        console.log(data, "async call");
        next(data)

    })

    })

}



async function SyncTask() {
 
    return new Promise(async (next) => {

    let user = await DB.findUser()
    let products = await DB.findProducts()
    let posts = await DB.findPosts();


    console.log({user, products, posts}, 'sync call')
    next({user, products, posts});

    })

}

(async () => {


console.time("timer1")
let newdata = await Asynctask()
console.timeEnd("timer1")

console.time("timer2")
let data = await SyncTask();
console.timeEnd("timer2")


})()


