numbers = [1, 2, 3, 4, 5]

access with []

slice index with [firstIndex?:secondIndex?:everyHowMany?]

len(list)



# edit list methods

.append(value)
.insert(atIndex, value)
.remove(value) eg .remove("apple")
.pop(index), no index means last index
.clear(), removes all elements from the list

# sort list methods
.sort() sorts in place, ascending order
sorted(list_example) creates new list
.reverse() reverses in place
list(reversed(list_example)) creates new list


# search list methods

value in list > returns a boolean (eg "apples" in vegetables)


# iterating through lists
for fruit in fruits:
    pass

numbers = [1, 2, 3, 4]
squared = [x**2 for x in numbers] # list comprehension




# misc
you can + or * lists