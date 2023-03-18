const events = require("events")

function MicroTask(tasks) {
   
    this.event = new events.EventEmitter();
    this.eventCount = 0;
    this.finalArr = [];
  
    this.event.addListener("done", (d) => {
        this.eventCount++
        this.finalArr.push(d)
        if (this.eventCount === tasks) {
            this.event.emit("final");
        }
       
    })
    this.data = new Promise((resolve, reject) => {
        this.event.addListener("final", () => {
           return resolve(this.finalArr)
        })

    })
    this.error = new Promise((next) => {
        process.on("unhandledRejection", (e) => {
            return next(e)
         })
         process.on("uncaughtException", (e) => {
            return next(e);
         })
    })

    return this;
    
}

module.exports = MicroTask;


