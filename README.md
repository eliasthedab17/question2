# Prime Numbers Finder Below 237

## Description

This program finds and prints all the prime numbers that are smaller than 237. It defines a function to check if a number is prime, and then iterates through all numbers from 2 to 236, printing those that are prime.

### Features:
- Defines a function to check if a number is prime.
- Iterates through numbers from 2 to 236.
- Prints each prime number found in the range.

### Example:
For the range 2-237:
- The program checks each number from 2 to 236.
- It prints all prime numbers in that range.

## Programmers

- *אליאס דבאג*
- *נור עמאר*

## Code

```javascript
// Function to check if a number is prime
function prime(num) {
  if (num == 2) return true;
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return true;
}

// Iterating through numbers from 2 to 236 and printing prime numbers
for (let i = 2; i < 237; i++) {
  if (prime(i)) { 
    console.log(i); 
  }
}
