## difference
- this function takes in two parameters and returns the difference of the two;
```javascript
    function difference(num1, num2) {
        return num1 - num2
    }
    console.log(difference(2,2)) // 0
    console.log(difference(0,2)) // -2
```

## product
- this function takes in two parameters and returns the product of the two;
```javascript
    function product(num1, num2) {
        return num1 * num2;
    }
    console.log(product(2,2)) // 4
    console.log(product(0,2)) // 0
```

## printDay
- this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
```javascript
    function printDay(dayNumber) {
        const daysOfTheWeek = {
            1: "Sunday",
            2: "Monday",
            3: "Tuesday",
            4: "Wednesday",
            5: "Friday",
            6: "Saturday",
        }
        return daysOfTheWeek[dayNumber]
    }
```    

## lastElement
- this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
```javascript
    function lastElement(array) {
        return array[array.length - 1];
    }
```

## numberCompare
- this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
```javascript
    function numberCompare(num1, num2) {
        if(num1 > num2) {
            return "First is greater";
        } else if(num1 < num2) {
            return "Second is greater"
        } else {
            return "Numbers are equal"
        }
    }
```

## singleLetterCount
- this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
```javascript
    function sigleLetterCount(word, letter) {
        word = word.toLowerCase()
        letter = letter.toLowerCase()
        let letterCount = 0;
        for(let i = 0; i < word.length; i ++) {
            if(word[i] == letter) {
                letterCount++;
            }
        }
        return letterCount;
    }
```
