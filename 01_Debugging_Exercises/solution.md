# Debugging Exercises.

> ## Part 1
> Answer the following questions:

- What does the throw keyword do?
> The throw keyword is a way to output an error from a running program. Since an error is output, the program is stopped also.

- What does the finally keyword do?
> The finally keyword can be used to specify operations that will be run regardless of an error been thrown and caught in the catch block or not.

- What is the difference between a TypeError and ReferenceError?
> A TypeError is the kind of error thrown when JavaScript detects an unsupported operation on a specific data type. 
> E.g: When you try to access a property (perhaps using the dot notation) on a variable that holds a string value, instead of an object

Explain what type of error will be thrown, why the error is occuring, and how to fix it:
1. 
> ```person;``` 
> A ReferenceError will be thrown. Why? The error is as a result of JavaScript's inability to find what "person" was assigned to because the variable was not even declared. To fix it: Assign the varible to a specific value or just simply declare it using either ```let``` or ```const``` (JavaScript will assign it to ```undefined```)

2. 
```javascript 
    let data = {};
    data.displayInfo();
```
> A TypeError will be thrown. Why? The error is because the property ```displayinfo``` does not exist on the data object. To fix it: Add the displayInfo function as a property on the data object.

3. 
```javascript 
    let data = {};
    data.displayInfo.foo = "bar";
```
> A TypeError will be thrown. Why? The error is because the property ```displayinfo``` does not exist on the data object. To fix it: Add the ```displayInfo``` key as a property on the ```data``` object.

4. 
```javascript
    function data(){
    let thing = "foo";
    }
    data();
    thing;
```  
> A ReferenceError will be thrown. The is because the variable ```thing``` is not defined in the scope where it is being accessed. To fix it: Add the variable to the same scope where it is being accessed (outside of the data function block)

> ## Part 2
> Fix the broken code and explain what was wrong:

1. 
Broken code: 
```javascript
    for(let i=0; i > 5; i++){
        console.log(i);
    }

```
Fixed code:
```javascript
    for(let i=0; i < 5; i++){
        console.log(i); // 1,2,3,4
    }
```

2. 
Broken code:
```javascript
    function addIfEven(num){
        if(num % 2 = 0){
            return num + 5;
        }
        return num;
    }   
```
Fixed code:
```javascript
    function addIfEven(num){
        if(num % 2 == 0){
            return num + 5;
        }
        return num;
    }   
```

3. 
Broken code:
```javascript
    function loopToFive(){
        for(let i=0, i < 5, i++){
            console.log(i);
        }
    }
```
Fixed code: 
```javascript
    function loopToFive(){
        for(let i=0; i < 5; i++){ // The odd syntax highlighting is a great visual cue to solve the issue
            console.log(i);
        }
    }
```

4. 
Broken code:
```javascript
    function displayEvenNumbers(){
        let numbers = [1,2,3,4,5,6,7,8];
        let evenNumbers = [];
        for(let i=0; i<numbers.length-1; i++;){
            if(numbers % 2 = 0); {
                evenNumbers.push(i);
            }
            return evenNumbers;
        }
    }
    displayEvenNumbers(); 
```
Fixed code:
```javascript
    function displayEvenNumbers(){
        let numbers = [1,2,3,4,5,6,7,8];
        let evenNumbers = [];
        for(let i=0; i<numbers.length; i++){
            if(numbers[i] % 2 == 0) {
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;
    }
    displayEvenNumbers()
```

