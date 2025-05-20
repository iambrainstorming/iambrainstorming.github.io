---
title: "Why students don't learn looping?"
date: "2019-11-18"
categories: 
  - "programming"
---

The most difficult concept for teaching programming to new students is looping.

> Students often fail to understand looping because they don't run the loop in their **head**, and don't think what will be the value of the variable in each loop.

The following way of commenting on the loop will help students to understand the loop quickly.  
Ask them to run the loop in the head, and then comment on what the variables will be in each step of the loop.

Remember to maintain the format while writing the comment, don't use short cuts, it will hinder the understanding.

![](https://iambrainstorming.files.wordpress.com/2019/11/loopconcept-1.png?w=1024)

Loops with comments

squares = \[\]
for value in range(1,11): #loop1 -> value=1, #loop2 -> value=2, #loop3 -> value=3
 square = value\*\*2 #loop1 -> value=1, square=1, #loop2 -> value=2, square=4, #loop3 -> value=3, square=9
 print(squares) #loop1 -> squares=\[\], #loop2 -> squares=\[1\], #loop3 -> squares=\[1,4\]
 squares.append(square) #loop1 -> square=1, squares=\[1\], #loop2 -> square=4, squares=\[1,4\], #loop3 -> square=9, squares=\[1, 9\]

The comment example for each loop:

#loop1 -> value=1, square=1, #loop2 -> value=2, square=4, #loop3 -> value=3, square=9

Code without comments:

squares = \[\]
for value in range(1,11): 
 square = value\*\*2 
 print(squares)
 squares.append(square) 
 

Loop 1

squares = \[\]
for value in range(1,11): #loop1 -> value=1
 square = value\*\*2 #loop1 -> value=1, square=1
 print(squares) #loop1 -> squares=\[\]
 squares.append(square) #loop1 -> square=1, squares=\[1\]

Loop 2

squares = \[\]
for value in range(1,11): #loop1 -> value=1, #loop2 -> value=2
 square = value\*\*2 #loop1 -> value=1, square=1, #loop2 -> value=2, square=4
 print(squares) #loop1 -> squares=\[\], #loop2 -> squares=\[1\]
 squares.append(square) #loop1 -> square=1, squares=\[1\], #loop2 -> square=4, squares=\[1,4\]

An so on...

![](https://iambrainstorming.files.wordpress.com/2019/11/output.png?w=684)

  
e.g. write:

loop1 -> value=1, square=1

no short cuts like  
1,1

**Other bad practices of programming by students and teachers:**

**1) Separation of theory and practical class**

Programming is best learned by doing on the computer, but in most colleges, a teacher teaches programming with the blackboard.

As a result, students don't have debugging skills. Writing codes in the paper is completely different from that of writing in computers. Codes need to be too precise in logic and syntax to give the result.

Neither the students are given any projects.

  
**An example of project-based learning:**

https://www.youtube.com/watch?v=Ke90Tje7VS0

2) **Students copy-paste code** from stackoverflow or the internet, without knowing the working of each statement.  
Students, please spend some time to understand the code before using it in your program.

You can't make the program working by simple copy-pasting the code. A complete program is made by many components linked together. A failure in single component will make the complete program useless.

**3) Not commenting or documenting the code** so that it can be revisited later  
Commenting and documenting helps you think hard about the code. You may feel like it's taking more time, but in reality, it saves time. All your future codes or projects will have faster development, and you will fall in less trouble.  
Always use comments and document your code.  
Use elaboration interrogation, retrieval practice, and spacing to revisit later on, so that logic and syntax go to your long term memory.  
You can use open-source tool like cherrytree for notetaking including programming

An example of commenting where comments are **numbered** so that you _**can know the sequence of coding**_, and easily understand the code later on.

![](https://iambrainstorming.files.wordpress.com/2020/01/coding.png?w=1024)

![](https://iambrainstorming.files.wordpress.com/2020/01/screen2020-01-20_120754.png?w=573)

[](https://www.goodreads.com/book/show/3735293-clean-code)[Clean Code: A Handbook of Agile Software Craftsmanship](https://www.goodreads.com/book/show/3735293-clean-code)

![](https://iambrainstorming.files.wordpress.com/2020/01/screen2020-01-20_121352.png?w=554)

**4) Not using good IDE**

> Some teachers argue that new learners should learn to program without IDE, but I disagree with it. IDE doesn't tell you how to write code so that students cheat, it actually helps to write clean code, and students get nudges of errors and formatting.

Use good IDE like vscode and sublime text, use linter to find bugs, learn shortcuts to writer faster codes, use code snippets, and _always use self-explanatory variable names_, take care of indentation and spacing so that code looks pleasing to read and use code formatter like Prettier and memorize its short cut keys.

Students also don't use and learn linux, which is very developer-friendly and increases productivity.

**5) Writing a lot of code before testing.**

Write a small part of the code and then test it. Never write a lot before testing because it will be hard to find the cause of the bug while testing. Always use console.logs and print statements to track the variables.

> Quitting bad practices can be hard, and needs some time and reasoned feedback when done wrong; learning good ones requires conscious deliberate practice with self-awareness.

## A nice blog about 10 Signs You will Suck at Programming:

[https://blog.usejournal.com/10-signs-you-will-suck-at-programming-5497a6a52c5c](https://blog.usejournal.com/10-signs-you-will-suck-at-programming-5497a6a52c5c)
