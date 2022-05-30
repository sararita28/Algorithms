// assertEqual
// takes 3 parameters: actual (scalar; result of calling function), expected (scalar; theoretical result of calling function; i.e. what we expect it to return), testName (string; describes what a call to assertEqual is verifying about the function being tested.)
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
     console.log('passed')   
    } else {
     console.log('FAILED ['+testName+'] Expected "'+expected+'", but got "'+actual+'"')
    }
}
