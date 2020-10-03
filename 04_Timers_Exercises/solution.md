This file contains solutions to the exercises in the timers sub-section of the *[Higher Order Functions, Timers, and Closures](https://snoseeds.github.io/inf-paces-school/courses/intermediate-javascript/javascript-timers.html)* course module

- What is the difference between setInterval and setTimeout?
> setInterval is used to perform asynchronous actions repatedly at specified intervals of time
> setTimeour, on the other hand, is used to perform asynchronous actions only once after a specified amount ot time

- What is the difference between using setInterval and a loop? Why would you want to choose one over the other?\
> A setInterval performs an action repeatedly in intervals i.e. ```every three seconds, print 'Code, Sleep, Repeat'```. A setInterval usually does not have an end; there's no point where it gets to and stops its operation, unless the interval is 'cleared' using the clearInterval function
> However, a loop is different becuase it performs an actions on each part (or index value) of an iterable (string, array, et cetera.) and when the loop gets to the end of the iterable, it stops. Also, a loop is not run at specified intervals of time, unlike setInterval. So loops execute as fast as the can, without requiring a specified number of second to delay before each execution

- What is the first parameter that setInterval and setTimeout accept?
> The first parameter is a callback function that contains the operation which the setInterval or setTimeout function should execute

- Why is it so important to store the result of setInterval and setTimeout in a variable?
> In order to stop their operation, you will need their returned value, which is a number denoting a unique identifier.

- What does asynchronous mean in the context of setTimeout and setInterval?
> Asynchronous in this context refers to operations that are run in the background, i.e., operations that are not currently in JavaScript's call stack due to the presence of other synchronous operations. These operations don't wait for synchronous operations to complete their execution; rather, they get executed in an event queue after which they are put in the call stack (provided no other synchronous operation is taking place).
