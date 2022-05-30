// assertEqual
// takes 3 parameters: actual (scalar; ideally result of calling function), expected (scalar; theoretical result of calling function; i.e. what we expect it to return), testName (string; describes what a call to assertEqual is verifying about the function being tested.)
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
     console.log('passed')   
    } else {
     console.log('FAILED ['+testName+'] Expected "'+expected+'", but got "'+actual+'"')
    }
}

// assertArraysEqual
// takes 3 parameters: actual (array of scalars; ideally result of calling function), expected (array of scalars; theoretical result of calling function; i.e. what we expect it to return), testName (string; describes what a call to assertArraysEqual is verifying about the function being tested.)
function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let sameValue = true
  for (let i in expected) {
    if (expected[i] !== actual[i]) {
      sameValue = false
      break;
    }
  }
  if (sameLength && sameValue) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "'+ expected + '", but got "' + actual + '"')
  }
}

// assertObjectsEqual
// takes 3 parameters: actual (object with scalars; ideally result of calling function), expected (object with scalars; theoretical result of calling function; i.e. what we expect it to return), testName (string; describes what a call to assertObjectsEqual is verifying about the function being tested.)
function assertObjectsEqual(actual, expected, testName) {
   actual = JSON.stringify(actual)
   expected = JSON.stringify(expected)
    if (actual === expected) { 
      console.log('passed')
    } else {
      console.log("FAILED ["+ testName + "] Expected "+ expected + ", but got "+ actual)
    }
}

// assertWithinRange
// takes 4 parameters: low (value representing lower bound of range), high (value representing higher bound of range), actual (value; ideally result of calling function), testName(string; describes what a call to assertWithinRange is verifying)
function assertWithinRange(low, high, actual, testName) {
  if (actual>=low && actual <=high) {
    console.log('passed')
  } else {
    console.log('FAIL ['+testName+'] "'+actual+'" not within range '+low+' to ' +high)
  }
}
