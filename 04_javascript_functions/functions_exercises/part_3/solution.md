## Rock / Paper / Scissor
- using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.
```javascript
    const input = prompt("Type 'Rock', 'Paper', or 'Scissors'")
    const possibleSelections = ["rock", "paper", "scissors"]

    function showSelection(inputValue) {
        inputValue = inputValue.toLowerCase();
        console.log("You selected: " + inputValue)

        const numberOfSelections = possibleSelections.length;
        const randomSelectionIndex = Math.round(Math.random() * (numberOfSelections - 1));
        return possibleSelections[randomSelectionIndex];
    }

    const output = showSelection(input);
    console.log("JavaScript Bot selected: " + output);
```