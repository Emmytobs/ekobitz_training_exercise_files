window.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector("h1");
    heading.innerText = "Hello World!"
    
    const colouredBoxes = document.querySelectorAll('section div');
    const selectedColor = document.querySelector('span.selected');

    colouredBoxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            let classNameColor = e.target.className
            selectedColor.innerText = classNameColor
        })
    })
    
    const newDiv = document.createElement('div');
    const colouredBoxesContainer = document.querySelector('section');
    newDiv.className += 'purple';
    colouredBoxesContainer.appendChild(newDiv);
    
})
