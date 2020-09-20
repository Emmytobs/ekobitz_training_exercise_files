1. Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.
> ``` let favoriteFoods = ["Jollof rice", "Beans", "Noodles and chicken"] ```

2. Access the second element in favoriteFoods.
> ``` favoriteFoods[1] ```

3. Change the last element in favoriteFoods to some other food.
> ``` favoriteFoods.splice(2, 1, "Fried yam and egg") ``` 

4. Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
> ``` const formerFavoriteFood = favoriteFood[0] ```

5. Add a favorite food to the back of the favoriteFoods array.
> ``` favoriteFoods.push("Eba and Egusi") ```

6. Add a favorite food to the front of the favoriteFoods array.
> ``` favoriteFoods.unshift("Shawarma") ```

7. What happens when you try to pop from an empty array?
> Nothing happens to the array. Since the array is empty the pop method returns **undefined**

8. In the examples below, use splice to convert the first array to the second array:
```
        1. [2, 3, 4, 5] -> [2, 4, 5]
        2. ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
        3. [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```
> 1. [2,3,4,5].splice(1, 1)
> 2. ["alpha", "gamma", "delta"].splice(1, 0, "beta")
> 3. [10,-10,-5,-3,2,1].splice(1, 3, 9, 8, 7, 6, 5, 4, 3)