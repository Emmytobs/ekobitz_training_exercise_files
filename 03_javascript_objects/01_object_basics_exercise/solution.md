1. Create an object that has your firstName, lastName, and occupation as keys.
> ```javascript
>   const obj = {
>       firstName: "Emmanuel",            
>       lastName: "Otobo",
>       occupation: "Software Engineer"
>   }
> ```

2. Access each value from your object using both dot notation and bracket notation.
 Dot Notation  | Bracket Notation
 --------------|------------------
 obj.firstName | obj["firstName"] 
 obj.lastName  | obj["lastName"]  
 obj.occupation| obj["occupation"]

3. Add a key for hobby to your object. Remove the key and value for occupation.
> obj["hobby"] = "";
> delete obj["occupation"];

4. What is the difference between dot notation and bracket notation?
> Dot notation ensures object keys that contain spaces or other special characters can be accessed. This is in contrast with bracket notation