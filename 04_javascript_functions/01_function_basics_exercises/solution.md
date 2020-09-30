1. Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

    function myName() {
        const name = "Emmanuel Otobo";
        console.log(name);
    }

2. Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

    const favoriteFoods = ["pizza", "ice cream"];

3. Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.

    function randomFood() {
        let randomFoodIndex = Math.random() * favoriteFoods.length;
        randomFoodIndex = Math.round(randomFoodIndex);
        return favoriteFoods[randomFoodIndex]
    }

4. Create a variable called numbers which is an array that contains the numbers 1 through 10.

    const numbers = [1,2,3,4,5,6,7,8,9,10]

5. Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:

    function displayOddNumbers() {
        for(let number of numbers){
            if(number % 2 != 0) {
                console.log(number)
            }
        }
    }

6. Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. Here is what that might look like:

    function displayOddNumbers() {
        for(let number of numbers){
            if(number % 2 == 0) {
                console.log(number)
            }
        }
    }

7. Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

    function returnFirstOddNumber() {
        for(let number of numbers){
            if(number % 2 != 0) {
                console.log(number)
                break;
            }
        }
    }

8. Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds

    function returnFirstEvenNumber() {
        for(let number of numbers){
            if(number % 2 == 0) {
                console.log(number)
                break;
            }
        }
    }

9. Create a function called returnFirstHalf which returns the first half of the numbers array

    function returnFirstHalf() {
        const halfLength = (numbers.length) / 2;
        const firstHalf = numbers.slice(0, halfLength)
        return firstHalf;
    }

10. Create a function called returnSecondHalf which returns the second half of the numbers array

    function returnFirstHalf() {
        const halfLength = (numbers.length) / 2;
        const secondHalf = numbers.slice(halfLength, numbers.length)
        return secondHalf;
    }
