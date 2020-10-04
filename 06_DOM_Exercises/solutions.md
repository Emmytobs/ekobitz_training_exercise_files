This file contains solutions to the exercises in the *[Document Object Model](https://snoseeds.github.io/inf-paces-school/courses/intermediate-javascript/javascript-dom-exercises.html)* course

Given the following HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
```

Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
```javascript
const container = document.getElementById('container')
```

2. Select the section with an id of container using querySelector.
```javascript
const container = document.querySelector('#container')
```

3. Select all of the list items with a class of "second".
```javascript
document.querySelectorAll('.second')
```

4. Select a list item with a class of third, but only the list item inside of the ol tag.
```javascript
document.querySelector('ol > li.third')
```

5. Give the section with an id of container the text "Hello!".
```javascript
const container = document.querySelector('.container')
container.innerText = "Hello!"
```

6. Add the class main to the div with a class of footer.
```javascript
const footer = document.querySelector('div.footer')
footer.classList.add("main")
```

7. Remove the class main on the div with a class of footer.
```javascript
const footer = document.querySelector('div.footer')
footer.classList.remove("main")
```

8. Create a new li element.
```javascript
document.createElement('li')
```
9. Give the li the text "four".
```javascript
const li = document.querySelector('li')
li.innerText = "four"
```
10. Append the li to the ul element.
```javascript
const liElement = document.querySelector('li')
const ulElement = document.querySelector('ul')

ulElement.appendChild(liElement)
```

11. Loop over all of the lis inside the ol tag and give them a background color of "green".
```javascript
const liElements = document.querySelectorAll('ol > li')
liElements.forEach(liElement => {
    liElement.style.backgroundColor = "green";
})
```

12. Remove the div with a class of footer.
```javascript
const footer = document.querySelector('div.footer')
footer.remove()
```

