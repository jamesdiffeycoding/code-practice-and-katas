strings can be made with '' or "" , or """ """ for multi-line strings

# accessing parts of strings

- indexing for single characters str[0], str[-1]. str[3]

- slice indexing for parts of a string
  - str = "Hello world!"
  - str[0:5] gives Hello
  - str[7:] gives world!
  - str[:5] gives Hello
  - str[::2] gives every second character

# putting values in strings

f"string with {value}"
"string with {} {}".format(value1, value2)

# combining strings

s1 + s2
s1 \* 3

# editing strings basic

str.lower()
str.upper()
s.capitalize() # first letter of str
str.title() # capitalise first letter of each word
str.strip() # trim white spaces

# editing strings advanced

str.replace(old, mew) # replaces globally
str.strip

# strings and arrays

str.split(",") converts string to list based on delimiter
"-".join(arr) joins list items by a string separator

# searching string content

str.find("string") gives first index of substring (or -1 if none)
str.count("string") counts how many instances of substring
"string" in str gives boolean True or False

# escaping characters

You can use escape characters to include special characters in strings:

\' - Single quote
\" - Double quote
\\ - Backslash
\n - Newline
\t - Tab

# immutability

you cant modify string content, only replace it with a new string.
eg
s = "hello"
s = "H" + s[1:]
print(s) # Output: Hello

# misc

len(str) gives length
