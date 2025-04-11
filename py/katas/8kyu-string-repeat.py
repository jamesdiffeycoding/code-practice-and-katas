# Description ---------------------------------------- 
# Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"


# Solution Example -----------------------------------
def repeat_str(repeat, string):
    res = ""
    for x in range(repeat):
        res += string
    return res

def repeat_str(repeat, string):
    return repeat * string



# Tests ---------------------------------------------
# import codewars_test as test
# from solution import repeat_str

# @test.describe('Fixed tests')
# def basic_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(repeat_str(4, 'a'), 'aaaa')
#         test.assert_equals(repeat_str(3, 'hello '), 'hello hello hello ')
#         test.assert_equals(repeat_str(2, 'abc'), 'abcabc')
#         test.assert_equals(repeat_str(0, ''), '')
#         test.assert_equals(repeat_str(0, 'I'), '')
#         test.assert_equals(repeat_str(5, ''), '')
#         test.assert_equals(repeat_str(6, 'I'), 'IIIIII')
#         test.assert_equals(repeat_str(5, 'Hello'), 'HelloHelloHelloHelloHello')