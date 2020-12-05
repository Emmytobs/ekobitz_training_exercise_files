# 1 Given a list [1,2,3,4], print out all the values in the list.
for num in [1,2,3,4]:
    print(num)
# 2 Given a list [1,2,3,4], print out all the values in the list multiplied by 20.
for num in [1,2,3,4]:
    print(num * 20)
# 3 Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"])
def returnFirstLetter():
    list_acc = []
    for first_letter in ["Elie", "Tim", "Matt"]:
        list_acc.append(first_letter[0])
    return list_acc
    
print(returnFirstLetter())
# 4 Given a list [1,2,3,4,5,6] return a new list of all the even values ([2,4,6])
even_values = [ num for num in [1,2,3,4,5,6] if num % 2 == 0 ]
print(even_values)
# 5 Given two lists [1,2,3,4] and [3,4,5,6], return a new list that is the intersection of the two ([3,4]).
intersection_list = []
for val1 in [1,2,3,4]:
    for val2 in [3,4,5,6]:
        if val1 == val2:   
            intersection_list.append(val1)

print(intersection_list)
# 6) Given a list of words ["Elie", "Tim", "Matt"] return a new list with each word reversed and in lower case (['eile', 'mit', 'ttam']).

# 7 Given two strings "first" and "third", return a new string with all the letters present in both words (["i", "r", "t"]).
str_1 = "first"
str_2 = "third"
similar_letters = []
for val_1 in str_1:
    for val_2 in str_2:
        if val_1 == val_2:   
            similar_letters.append(val_1)

print(similar_letters)
# 8.) For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 ([12, 24, 36, 48, 60, 72, 84, 96]).
divisible_by_12 = []
for number in range(2, 100): 
    if number % 12 == 0:
        divisible_by_12.append(number)
print(divisible_by_12)
# 9.) Given the string "amazing", return a list with all the vowels removed (['m', 'z', 'n', 'g']).
no_vowels = []
for letter in "amazing":
    if not bool(letter in ["a", "e", "i", "o", "u"]):
        no_vowels.append(letter);
print(no_vowels)
# 10. Generate a list with the value [[0, 1, 2], [0, 1, 2], [0, 1, 2]].
generated_list = [ *[[0, 1, 2], [0, 1, 2], [0, 1, 2]] ]
print(generated_list)
# 11. Generate a list with the value:
[
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
]
nested_list = []
i = 0
while i < 10:
    nested_list.append([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    i+= 1
print(nested_list)