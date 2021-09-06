Input Validation (Last Updated on September 1, 2021)

- We only want the tip calculation to take place if all inputs are valid, so lets create some functions that handle just that.
- Since each function is checking for a seperate thing, lets create three functions: 1. Check the bill total 2. the tip percentage, 3. the amount of people.
- the functions won't just check for missing, but for invalid values as well. Example, don't allow the bill to be over 1000 dollars, dont let the tip be over 99.99 percent, and don't let the number of people be over 99 people.
- Need to create test for these functions, these functions will take in the actual input DOM so that way it can grab the value itself, and also apply/remove error classes depending on the input.
- Exmaple:
  const validateBill(inputDOM), validatePercent(button) (only pass in the button that is active), validatePeople(inputDOM)
- a good question is that whether these should be part of the general DOM module/calculator DOM module, personally I am going to leave them out since I only want the module to focus on listening to the input changes and will then call those validator functions when the time is appropriate, plus I don't want to place too much in a module.
- We will be creating/mocking dom elements in our test suite, later down the line I will refactor with jest specific mock functions.
- Remember that we cannot direclty take in the input element, since they are sadly wrapped in a div I have to take in the div, and then grab the input element out within the function.

- Ending note for September 1st, maybe the validator function only needs to check, and only return true or false, while we let the dom element handle the removing and adding of elements.

- Testing DOM in Jest: https://dev.to/ms314006/use-jest-write-unit-testing-for-dom-manipulation-3n6c

DOM
- What will happen, we will first check input validity in seperate function, then if that passes, then do the tip caluclation. So Two seperate functions, 
