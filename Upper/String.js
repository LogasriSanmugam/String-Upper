def find_uppercase_letters(s):
    uppercase_letters = ""
    for char in s:
        # Check if the character is an uppercase letter
        if 'A' <= char <= 'Z':
            uppercase_letters += char
    
    return uppercase_letters
input_string = "Hello World! This is a Test String with UPPERCASE Letters."
result = find_uppercase_letters(input_string)
print("Uppercase letters:", result)

