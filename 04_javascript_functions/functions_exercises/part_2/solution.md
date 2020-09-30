## multipleLetterCount
- this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
```javascript
    function multipleLetterCount(string) {
        let letterCount = {}
        for(let i = 0; i < string.length; i++) {
            let letter = string[i];
            if(letterCount[letter] == undefined) {
                letterCount[letter] = 1;
            } else {
                letterCount[letter] += 1;
            }
        }
        return letterCount;
    }
```
## arrayManipulation
```javascript
    function arrayManipulation(array, command, location, value) {
        if(command == "add"){
            if(!value) return console.log("Please put in a number");
            location == "end" ? array.push(value) : array.pop(value);
        } else {
            location == "end" ? array.pop() : array.shift()
        }
    }
```

## isPalindrome
```javascript
    function isPalindrome(value) {
        value = value.trim().toLowerCase();
        const halfValueLength = value.length / 2;
        const lastIndex = value.length - 1;
        const isPalindromeAccumulator = [];
        for (let i = 0; i < halfValueLength; i++) {
            if(value[i] == value[lastIndex - i]) {
                isPalindromeAccumulator.push(true)
            } else {
                isPalindromeAccumulator.push(false);
            }
        }
        const isPalindrome = isPalindromeAccumulator.every(bool => bool == true);
        return isPalindrome;
    }
```


