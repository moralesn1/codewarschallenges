// You need to complete the FizzBuzz function:

// if n is divisible by 15, return 'fizzbuzz'
// if n is divisible by 5, return 'buzz'
// if n is divisible by 3, return 'fizz'
// otherwise, return n as a number
// where n is a positive integer.

// Requirement: Every line must have at most 3 characters, and total number of lines must be less than 25.

// my solution

f = (n) => (n % 3 ? "" : "f\
iz\
z") + (n % 5 ? "" : "b\
uz\
z") || n;

// top solution

f = (n) => (n % 3 ? "" : "f\
iz\
z") + (n % 5 ? "" : "b\
uz\
z") || n;
