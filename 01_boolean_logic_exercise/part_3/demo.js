let randomNumber = Math.random().toFixed(1);

let output = "";
if(randomNumber < 0.5) {
    output = "Under 0.5"
}
else {
    output = "Over 0.5"
}

console.log(output)

