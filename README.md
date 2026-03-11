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

## Solution Logic

The solution efficiently works directly with the binary representation without converting to decimal:

1. **Remove insignificant leading zeros**: Strip all leading zeros from the binary string to avoid unnecessary operations
2. **Process bits from right to left**: 
   - If the rightmost bit is `1` (odd number), the operation is subtract 1, which turns that `1` into `0`
   - If the rightmost bit is `0` (even number), the operation is divide by 2, which removes the rightmost `0`
3. **Continue until empty**: Keep removing bits until the string is exhausted

This approach avoids decimal conversions and leverages the simplicity of binary operations on the string representation.

## Complexity

- **Time Complexity**: $O(n)$ where $n$ is the length of the binary string. Each bit is processed exactly once.
- **Space Complexity**: $O(n)$ for storing the binary string representation.

## Usage

Run the test suite with:

```sh
npm test
```
