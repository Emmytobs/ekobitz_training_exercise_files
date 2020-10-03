This file contains solutions to the exercises in the *[Higher Order Functions, Timers, and Closures](https://snoseeds.github.io/inf-paces-school/courses/intermediate-javascript/javascript-hof-timers-closures-exercises.html)* course


- Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.
```javascript
function countdown(number) {
    let timerId = setInterval(() => {
        let decrementedNum = number = number - 1;
        
        if(number == 0){
            console.log("DONE!")
            return stopInterval()
        }

        console.log(decrementedNum)
    }, 1000)

    const stopInterval = () => {
        clearInterval(timerId)
    }
}

countDown(4)
```

- Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
```javascript
function randomGame() {
    let counter = 0;
    let timerId = setInterval(() => {
        let randomNum = Math.random().toFixed(2)
        counter = counter + 1;
        console.log(`${randomNum} after ${counter} ${counter === 1 ? "trial" : "trials"}`)
        if(randomNum > 0.75) {
            console.log(`It took ${counter} ${counter === 1 ? "trial" : "trials"} before a number greater than 0.75 was found`)
            return stopTimer()
        }
    }, 1 * 1000)
    function stopTimer() {
        clearInterval(timerId)
    }
}
randomGame()
```

- Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
```javascript
function isEven(num) {
    return num % 2 == 0;
}
```

- Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
```javascript
function isOdd(num) {
    return num % 2 != 0;
}
```

- Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
```javascript
function isPrime(num) {
    if(num > 1 && num)
}
```

- Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
```javascript
function numberFact(num, fn) {
    return fn(num)
}
```

- Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
```javascript
function find(array, fn) {
    for(let i = 0; i < array.length; i++) {
        let value = fn(array[i])
        if(value) {
            return array[i];
        }
    }
}
find([1,2,3,4], val => val > 3)
```

- Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
```javascript
function findIndex(array, fn) {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return i;
        }
    }
}
findIndex([1,2,3,4], val => val == 2)
```

- Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
```javascript
function specialMultiply(num1, num2) {
    if(!(num1 || num2)) {
        throw Error("Please input at least one number")
    }
    if (num1 && num2) {
        return num1 * num2
    } 
    return function (num) {
        let numberPassedIn = num1 || num2;
        return numberPassedIn * num;
    }
}
```