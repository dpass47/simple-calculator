# Simple Calculator

This is a simple calculator app built with React.js that completes calculations based on user input.

## Table of contents

-   [Overview](#overview)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### Screenshot

![calculator](https://github.com/dpass47/simple-calculator/assets/105099652/f2ab0c3b-a094-48d4-aa5c-ab1a329cc55a)

### Links

-   Live Site URL: [Calculator - devdante.com](https://calculator.devdante.com)

## My process

I bootstrapped the project using create-react-app. I began by building out the initial layout of the calculator in JSX, which I then styled using SCSS. I used flexbox to align the calculator to the center of the application and grid for the keypad layout. In JSX, I used a conditional statement to hide the formula before any numbers are inputted by the user. When programming the logic for the calculator, I used state in React to keep track of multiple data points that are useful for the calculations and displays of the application. Using that data, I created multiple functions to handle user clicks on various buttons of the calculator. The functions use ternary operators to determine what needs to be completed next depending on the state of the object. I used math.js to ultimately take the formula string that is created and calculate it. Math.js also provides scientific notation when the answer is longer than a certain length.

### Built with

-   HTML5
-   Syntactically Awesome Style Sheets (SASS)
-   JavaScript
-   React.js
-   Math.js
-   Flexbox
-   CSS Grid
-   Mobile-first workflow

### What I learned

I learned a lot about handling events in React, as there are plenty of events happening with the many buttons of a calculator. I feel like I strengthened my abilities and understanding of ternary operators. This was a complex application with a lot of moving parts, and I gained a better ability to find problems in a larger application.

## Author

-   Website - [Dante Passalacqua](https://www.devdante.com)
-   Twitter - [@dpass47](https://www.twitter.com/dpass47)
