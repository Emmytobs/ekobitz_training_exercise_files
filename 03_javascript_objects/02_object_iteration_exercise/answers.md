
1. Given the following object below, write code to print the value then the key to the console separated by '=>':
```javascript
let namesAndHobbies = {
    elie: JavaScript,
    matt: jogging,
    janey: table building,
    tim: sailing
}
```
>```javascript
> for (let key in namesAndHobbies) {
>     console.log(namesAndHobbies[key] + " => " + key)
> }
>```

2. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.
>```javascript
> namesAndHobbies["emmanuel"] = "driving";
>```

3. Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.
>```javascript
> if("emmanuel" in namesAndHobbies) {
>    console.log("emmanuel", namesAndHobbies["emmanuel"])
>}
>```
