+++
title = 'Python Conditionals'
date = 2023-11-30T11:38:44+05:30
draft = false
description = "Greetings programming enthusiasts. Today we are gonna give you a deep dive about python conditional statements."
image = "/images/if-else.webp"
imageBig = "/images/if-else.webp"
categories = ["Python", "Programming"]
authors = ["Sandeev"]
avatar = "/images/avatar-sandeev.webp"
featured = false
+++

# Python Conditional Statements

Greetings programming enthusiasts. Today we are gonna give you a deep dive about python **if else** statements.

Before learning about pythons if else statements, you have to be familiar with the usual **_logical conditions._**

## Python Logical Conditions

- == **equal** operator.

example:

```python
a = 5
b = 5
print(a == b) #returns true

c = 6
d = 9
print(c == d) #returns false
```

- **&gt;** &nbsp; **greater than** operator
- **&lt;** &nbsp; **less than** operator

example:

```python
a = 20
b = 35
print(b > a) #returns true
print(a > b) #returns false
print(a < b) #returns true
print(b < a) #returns false
```

- **&gt;=** &nbsp; **greater or equal** operator

- **&lt;=** &nbsp; **less than or equal** operator

```python
c = 25
d = 25
e = 35
f = 15

print(c >= e) #returns true since c is greater than e
print(c >= d) #returns true since c is equal to e
print(f <= c) #returns true since f is less than c
print(c <= d) #returns true since c is equal to d
print(c <= f) #returns false
```

## Conditional Statements

- Conditional statements allow you to execute different blocks of code based on whether a given condition is **true** or **false**.

This is how it follows

```python

if condition:
	# if the condition is true, run this code

else:
	# if the condition is false run this code
```

here is a simple example.

```python
A = 5
B =  7
if A > B:  #checks whether the A is greater than B
	print('A is greater than B')  # runs this if the above condition is true.

else:
	Print('B is greater than A')   #runs this if the above condition is false.

```

In this case, this code block gets executed since A > B is **false** (A is 5 and B is 7)

```python
'B is greater than A'
```

Here is another example.

```python
age = int(input('Enter your age: ')) # gets the age as an input from the user and convert it into a number type
if age >= 18:   # checks the age the user gave as input is greater or equal to 18
    print('You are eligible to vote.')
else:
    print('You are not eligible to vote yet.')
```

If you enter any number that is equal or greater than 18 as the input (**lets say 25**) you get this output

```markdown
You are eligible to vote
```

If you enter any number that is less than 18 as the input (**lets say 15**) you get this output

```markdown
You are not eligible to vote
```

- ## elif Statement

The **elif** statement allows you to check multiple conditions sequentially, and if the preceding **if** or **elif** conditions are not satisfied, the block of code associated with the **first true condition is executed.**

```python
if condition1:
   # Code to execute if condition1 is true
elif condition2:
   # Code to execute if condition2 is true
elif condition3:
   # Code to execute if condition3 is true
else:
   # Code to execute if none of the above conditions are true
```

**Here is a simple example**

```python
# Assume some variable
grade = 85
# Check different conditions using if, elif, and else
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
```
