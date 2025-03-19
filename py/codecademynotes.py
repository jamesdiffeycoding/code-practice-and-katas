# Python 3 for Experienced Programmers course
print("Python 3 course notes")

# Python started in 1991, updated to Python 2 and Python 3 later.
# P is easy to learn, well supported and widely used.
# P is used for software (eg web dev with Flask), data science (eg ML models with Tensorflow) and automation (eg scripts to automate analysis in Excel)

# Classes follow the CapWords convention (e.g. class MyDog)

# variables and functions have this_notation.
# indentations should be 4 spaces.
# block and inline comments use the same notation

# clean code is vital

# Popular Python IDEs are vsode, pycharm, and jupyetr notebooks.
# Jupyter is usually preferred for simple and quick data analysis projects.


# In Python the main function is the starting point of most programs.
# If you run the file, the __name__ variable checks whether the function
# .. is being run as the primary module or as a library in another script.
def main():
    print('Hello World!')

if __name__ == '__main__':
    main()

# to ask for input, use input
# name = input("What's your name?")
# age = input("How old are you?")

# print literals with +, f'{}', '{}'.format(value)
# print("Hello, " + name + " you are " + age + ".")
# print(f'Nice to meet you, {name}')
# print('Very nice to meet you, {} of {} years!'.format(name, age))




# string methods---------------
# .format(values)


# type casting -----------------
temperature = float("97.5")
temperature = int(97.5)
temperature = str(97.5)
temperature = "97.5"
print(type(temperature))

# Data types -------------------
# integer, float, bool, string
inte = 101
inte = int("101")
fl = 101.3
fl = float("101.3")
bl = True
bl = bool('True')
bl = bool('False')
bl = bool(0)
bl = bool(None)
bl = bool()
stri = "hello"
stri = 'hello'
stri = str(93.23)

# Arithmetic operators ---------------------
# +, -, *, ** (power), /, // (integer only), % (modulo)

# Assignment operators ---------------------
# =, +=, -=, *=, /=, %=

# Comparison operators ---------------------
# ==, !=, >, <, >=, <=

# Logical operators ------------------------
# and, or, not() (reverses sign)

# Conditionals -----------------------------
score = 90
if score >= 80:
    print("Passed!")
elif score >=50: 
    print("Retry")
else:
    print("Failed")


# for loops ----------------------------------
nums = [1,2,3,4,5]
for num in nums:
    print(num+1)

for i in range(3):
    print(i)


teams = [['Jody', 'Abe'], ['Abhishek', 'Kim'], ['Taylor', 'Jen']]
for team in teams:
  for name in team:
    print(name)


# while loops ----------------------------------
i=1 
while i<6:
    print(i)
    i+=1


# while True:
    # print("hi")

# note: to escape an infnite loop, press ctrl c

# pass, break, continue -----------------------
pass # is just a placeholder

if True:
    pass
    print("This will still show")

# break can only be used in a loop
names = ['Joyce', 'Hannah', 'Manny', 'Manoj', 'Ezekiel']
 
for name in names:
  if 'h' in name.lower():
      break
  else:
      print(name)

# continue just skips the present iteration in the loop
for name in names:
  if 'm' in name.lower():
      continue
  else:
      print(name)


# String methods ---------------------------------

# check values in string
# if "j" in "peculiar":...


# Function syntax ------------------------------
def some_function(some_input1, some_input2):
#   … do something with the inputs …
  return output

# a function that takes an array of numbers and checks divisbility
def divisible_by_ten(nums):
  count = 0
  for num in nums:
    if num % 10 == 0:
      count += 1
  return count

def add_greetings(names):
  new_list = []
  for name in names:
    new_list.append("Hello, " + name) # Array method append
  return new_list


# Write a function called delete_starting_evens() that has a parameter named my_list.
# remove elements from the front until the front is not even. The function should then return my_list.
# eg [4, 8, 10, 11, 12, 15] should return [11, 12, 15].



def delete_starting_evens(my_list):
  while (len(my_list) > 0 and my_list[0] % 2 == 0):
    my_list = my_list[1:] # replaces list with all but first
  return my_list


def odd_indices(my_list):
  new_list = []
  for index in range(1, len(my_list), 2):
    new_list.append(my_list[index])
  return new_list

def exponents(bases, powers):
  new_list = []
  for base in bases:
    for power in powers:
      new_list.append(base ** power)
  return new_list

# https://www.codecademy.com/courses/python-for-programmers/articles/advanced-python-code-challenges-loops

# array methods
# .append()