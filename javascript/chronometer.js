class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    if (callback) {
      this.intervalId = setInterval( () => {
        this.currentTime++
        callback
      },1000)

    } else {
      this.intervalId = setInterval( () => {
        this.currentTime++
        console.log(this.currentTime)
      },1000)
    }
    
  }

  getMinutes() {
    // ... your code goes here
    console.log(`This is the current time in minues ${this.currentTime / 60}`)
    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    // ... your code goes here
    console.log(`This is the current time in seconds ${this.currentTime % 60}`)
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const twoDigit = value.toString().length < 2 ? value.toString().padStart(2, "0") : value.toString()
    // if(value.toString().length < 2)
    return twoDigit
  

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}



// setTimeout(crono.stop, 40000)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
