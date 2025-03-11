# Incubyte Assignment Submission

![alt text](https://cdn.prod.website-files.com/6626410e05635d300b393781/6626470cbc8d6debaaa5adeb_Incubyte%20Logo.svg)

## Approach: Test-Driven Development (TDD)

This repository contains the assignment submission for **Incubyte**.

### String Calculator
The core logic is implemented in **`stringCalculator.js`**, which adds numbers separated by a given delimiter.

- If negative numbers are encountered, an error is thrown.
- The error message includes all negative numbers from the input.

### Where are the test cases written?
Test cases are written in **`test/test.js`** using the **Mocha** test framework.

### Where is the actual logic implemented?
The `stringCalculator` function is implemented in **`src/stringCalculator.js`**.  
Lodash is used for string manipulations.

### Initial setup
```
npm install
```

### How to run test suite
```
npm test
```

### How to execute the calculator function
```
 node src/stringCalculator.js <input> 
```
Example: 
```
 node src/stringCalculator.js 1,5
```

