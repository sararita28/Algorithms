//Example of a function that uses recursion. Base case is when n is 0. Function recursively calls itself till condition is met (i.e. n++ <10)
let n = 0;

function countUp() {
  console.log(n);
  if (n++ < 10) {
    countUp(n);
  }
}
countUp();
