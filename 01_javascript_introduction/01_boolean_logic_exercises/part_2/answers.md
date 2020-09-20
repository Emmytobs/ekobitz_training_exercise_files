# Part 2
# Part 2
1. What should the above code console.log?
> It will console log "Keep it up!"

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
> When JavaScript sees this code: **if(isLearning)**, it will convert it to a boolean implicitly because JavaScript expects a boolean value (true or false) in the parentheses.

1. What should the above code console.log? Why?
> The code above will output "third". 
> This is because all other conditions will evaluate to false due to the firstvariable and secondvariable both having "falsy" values. This leaves the third condition to be met since one of the variables is truthy and when a truthy valueand a falsy value is used with a logical OR operator, the truthy value makes the expression true! 

2. What is the value of firstvariable when it is initialized?
> The value of firstvariable is undefined. JavaScript will always initialize an unintialized variable

3. Is the value of firstvariable a "truthy" value? Why?
> The value of firstvariable is **not** a "truthy". 
> This is because the implicit value given by JavaScript is "undefined", which returns false when converted tp a boolean, making it "falsy"

4. Is the value of secondvariable a "truthy" value? Why?
> The value of secondvariable is **not** a "truthy".
> Although an empty string is assigned to the variable, the empty string denotes an empty dataset, which also returns false when converted to a boolean

5. Is the value of thirdvariable a "truthy" value? Why?
> The value of thirdvariable **is** a "truthy".
> This is because a number (1) is assigned to the variable. Numeric values (except 0) have a boolean value of true


