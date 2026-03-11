# Binary Steps to Zero

## Problem Description

This project solves the problem of counting the number of steps needed to reduce a binary number to zero following these rules:
- If the number is **odd**, subtract 1
- If the number is **even**, divide by 2

The process continues until the binary representation reaches 0.

## Example

For the binary string `"111"` (decimal 7):
1. `111` (7) is odd → subtract 1 → `110` (6) - **Step 1**
2. `110` (6) is even → divide by 2 → `11` (3) - **Step 2**
3. `11` (3) is odd → subtract 1 → `10` (2) - **Step 3**
4. `10` (2) is even → divide by 2 → `1` (1) - **Step 4**
5. `1` (1) is odd → subtract 1 → `0` (0) - **Step 5**

**Result: 5 steps**

## Usage

Run the test suite with:

```sh
npm test
```
