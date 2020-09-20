Starting with:``` let arr = ["JavaScript", "Python", "Ruby", "Java"]```

1. Return the following array: ["Python", "Ruby"].
> ```javascript
> arr.slice(1, 3)
> ```

2. Combine the array with the array ["Haskell", "Clojure"].
> ```javascript
> arr.concat("Haskell", "Clojure")
> ```

3. Return the string "JavaScript, Python, Ruby, Java".
> ```javascript
> arr.join(", ")
> ```

4. Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.
> A value type is a **specific value** assigned to a variable. This is generally used when primitives (strings, numbers) are assigned to variables. This "specific value" is stored in a particular point in memory. [hence, in ``` let name = "Emmanuel" ```, name is stored in memor]
> When the variable is assigned to another variable, the other variable is immediately assigned the value of the original variable and is stored in another point in memory 
>> For example:
>> ```javascript
>>  let name = "Emmanuel"; // Stored in one point in memory
>>  let firstName = name; // Stored in a different point in memory 
>> // Modifications to "firstName" does not reflect in "name" because they are at different points in memory
>> // JavaScript behind the scenes evaluates the variable "name" and assigns the value ("Emmanuel") to firstName
>> ```

> A reference type is a **pointer to a specific value**. This is generally used when objects are assigned to variables. Here, the variables contains the location of the object in memory (hence the name "reference type").
> For example, in the line of code below:
>> ```javascript
>> let person = { name: "Emmanuel", age: 20 };
>> let anotherPerson = person
>> ```
> person and anotherPerson are assigned a reference to the object ( ```{ name: "Emmanuel", age: 20 }```)
> Becuase of this, if **anotherPerson** is modified, the changes are reflected in the **person** also.