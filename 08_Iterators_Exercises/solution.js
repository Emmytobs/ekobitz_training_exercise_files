/*
    PART 1 - Use the following object for this set of questions:

*/
let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];


// Write a function called printEmails which console.log's each email for the users.
function printEmails() {
    users.forEach(user => console.log(user.email))   
}

// printEmails()

// Write a function called printHobbies which console.log's each hobby for each user.
function printHobbies() {
    users.forEach(user => {
        user.hobbies.forEach(hobby => console.log(hobby))
    })
}
// printHobbies()

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
function findHometownByState(state) {
    let user = users.find(user => user.hometown.state == state)
    console.log(user)
}
// findHometownByState("CA") // Larry

// Write a function called allLanguages which returns an array of all of the unique values
function allLanguages() {
    let languages = []
    users.forEach(user => {
        languages = [...languages, ...user.favoriteLanguages]
    })

    const sortedLanguages = languages.sort();

    // sortedLanguages.reduce((acc, currentVal, index) => {
    //     if(acc == sortedLanguages[index]) {
    //         sortedLanguages.splice(index, 1)
    //     }
    //     return acc; //only works for the first two languages (c#)
    // })

    for(let index = 1; index < sortedLanguages.length; index++) {
        let prevLanguage = sortedLanguages[index - 1];
        if(prevLanguage == sortedLanguages[index]) {
            sortedLanguages.splice(index, 1)
        }
    } 
    console.log(sortedLanguages)
}
// allLanguages()
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
function hasFavoriteEditor(editor) {
    const hasEditor = users.some(user => user.favoriteEditor == editor)
    console.log(hasEditor)
}
// hasFavoriteEditor("Eclipse")

// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
function findByUsername(name) {
    const username = users.find(user => user.username == name)

    !username && console.log("No user with such username")

    console.log(username)
}
// findByUsername("Emma")

/*
    PART 2

*/
// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
function vowelCount(string) {
    let _string = string;
    let vowelCountObj = {}
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    _string = string.trim().toLowerCase()
    
    for(let index = 0; index < _string.length; index++) {
        let isAVowel = vowels.some(vowel => vowel == _string[index]);
        if(!isAVowel) {
            _string = _string.replace(_string[index], '');
        }
    }

    for(let index = 0; index < _string.length; index++) {
        let currentChar = _string[index]
        vowelCountObj[currentChar] ? vowelCountObj[currentChar] += 1 : vowelCountObj[currentChar] = 1
    }
    console.log(vowelCountObj)
}

// vowelCount('awesome')

// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
function removeVowels(string) {
    let _string = string;
    let notAVowel = []
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    _string = string.trim().toLowerCase()
    
    for(let index = 0; index < _string.length; index++) {
        let isAVowel = vowels.some(vowel => vowel == _string[index]);
        if(!isAVowel) {
            notAVowel.push(_string[index])
        }
    }
    console.log(notAVowel)
}

// removeVowels('amazingly')