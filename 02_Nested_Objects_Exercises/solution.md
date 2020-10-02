# Nested Objects Exercises.

Given the following nested object:
```javascript
    let nestedData = {
        innerData: {
            order: ["first", "second", "third"],
            snacks: ["chips", "fruit", "crackers"],
            numberData: {
                primeNumbers: [2,3,5,7,11],
                fibonnaci: [1,1,2,3,5,8,13]
            },
            addSnack: function(snack){
                this.snacks.push(snack);
                return this;
            }
        }
    }
```

- Using a for loop, console.log all of the numbers in the primeNumbers array
```javascript
    const primeNumbers = nestedData.innerData.numberData.primeNumbers;
    for(let i = 0; i < primeNumbers.length; i++) {
        console.log(primeNumbers[i])
    }
```

- Using a for loop, console.log all of the even Fibonnaci numbers.
```javascript
    const fibonnaci = nestedData.innerData.numberData.fibonnaci;
    for(let i = 0; i < fibonnaci.length; i++) {
        if(fibonnaci[i] % 2 == 0) {
            console.log(primeNumbers[i])
        }
    }
```

- Console.log the value "second" inside the order array.
```javascript
   const secondValue = nestedData.innerData.order[1];
   console.log(secondValue)
```

- Invoke the addSnack function and add the snack "chocolate".
```javascript
    const addSnack = nestedData.innerData.addSnack;
    addSnack("chocolate");
```

- Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
> The ```this``` keyword represents the current context of where it is written. So in this case, in the addSnack function, ```this``` represents the execution context on the function. This excution context is the nested innerData object in the nestedData object.



Given the following nested object:
```javascript
    let nestedObject = {
        speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
        data: {
            continents: {
                europe: {
                    countries: {
                        switzerland: {
                            capital: "Bern",
                            population: 8000000
                        }
                    }
                }
            },
            languages: {
                spanish: {
                    hello: "Hola"
                },
                french: {
                    hello: "Bonjour"
                }
            }   
        }
    }
```

- Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
```javascript
    function addSpeaker(speakerName) {
        const newSpeaker = { name: speakerName }
        nestedObject.speakers.push(newSpeaker)
    }
    addSpeaker("Emmytobs")
```

- Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
```javascript
    function addLanguage(language, word) {
        let languageObj = { 
            language: {
                hello: word
            }
        }
        nestedObject.data.languages.push(languageObj);
    }

    addLanguage(Serbian, "Здраво (Zdravo)")
```

- Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

```javascript
    function addCountry(countryName, capital, population) {
        const countriesObj = nestedObject.data.continents.europe.countries;
        let newCountry = {
            countryName: {
                capital,
                population
            }
        }
    }
    addCountry("Germany", "Berlin", 83200000)

```