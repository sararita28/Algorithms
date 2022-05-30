# Functional Testing
### 1. Unit testing
Goal is to validate the behavior of individual units of code.

### 2. Integration testing
Testing multiple units of code together.

### 3. End-to-end testing
Runs the app in a simulated environment and attempts to emulate actual user behaviors.

<em>Although the 3 above-mentioned testing strategies are the most important ones to know, they are not the only ones. You also have acceptance testing, system testing, smoke testing...</em>

---- 

### Running test using jest, vite
npm init @vitejs/app <br>
npm i jest <br>
create a ___.test.js file <br>
add a test script : "jest --watchAll --verbose" <br>
npm i @types/jest <br>
add a jsconfig.json file and add 
```
{
  "typeAcquisition" : {
    "include" : [
      "jest"
    ]
  }
}
```
npm run test

___.test.js file:
```
describe('Describe what you're testing here', () => {
  // *note below
  test('Describe the functionality here', () => { // **note below
    expect(...).toBe(...) //toEqual, toMatch ....
  })
})
```
*You may use global variables as well as hooks (like beforeEach) to avoid redundant code <br>
**You might want to start by writing down all your test skeletons before writing the actual tests. Doing so will result in an error. If you still want your tests to pass you should add a .todo to your test/it
