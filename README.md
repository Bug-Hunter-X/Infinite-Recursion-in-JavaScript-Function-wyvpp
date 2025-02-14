# Infinite Recursion Bug in JavaScript

This repository demonstrates a common yet easily overlooked bug: infinite recursion in a seemingly simple recursive function. The function `foo` intends to perform a calculation based on its inputs `a` and `b`. However, due to a flaw in the base case handling, it falls into infinite recursion when both `a` and `b` are negative integers.  This example highlights the importance of careful consideration of all possible input scenarios when designing recursive functions.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the flawed recursive function `foo`.
3. Run the `bug.js` file. You will likely see a stack overflow error because the recursion continues indefinitely.
4. Open `bugSolution.js` to see the corrected function with proper base case handling.

## Bug Solution

The solution involves modifying the base case condition to correctly handle negative integers and other edge cases. See `bugSolution.js` for the improved function.  The core issue was a missing base case for negative numbers. The function incorrectly continued recursion even when it should have stopped. 