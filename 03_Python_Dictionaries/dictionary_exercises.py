# # 1.) Given a list [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this {'job': 'Instructor', 'name': 'Elie'} (the order does not matter).
sample_list = [("name", "Elie"), ("job", "Instructor")]
new_dict = { 
    item[0]: item[1]
    for item in sample_list
}
print(new_dict)

# 2.) Given two lists ["CA", "NJ", "RI"] and ["California", "New Jersey", "Rhode Island"] return a dictionary that looks like this {'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}. You can research the zip method to help you.
state_initials = ["CA", "NJ", "RI"]
state_name = ["California", "New Jersey", "Rhode Island"]
newDict = { 
    state_name[idx]: state_initials[idx] 
    for idx, value in enumerate(state_initials) 
}
print(newDict)

# 3.) Create a dictionary with the key as a vowel in the alphabet and the value as 0. Your dictionary should look like this {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}. (Do not use the fromkeys method).
new_dict = { key: 0 for key in ["a", "e", "i", "o", "u"] } 
print(new_dict)

# 4.) Create a dictionary starting with the key of the position of the letter and the value as the letter in the alphabet. You should return something like this (Hint - use chr(65) to get the first letter):
new_dict = {
    num: chr(num + 64)
    for num in range(1, 27)
}
print(new_dict)