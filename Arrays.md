//Accessing an Element
  //If we know the index
  Time Complexity: O(1)
  
//Searching for an element Linearly
arr.indexOf('X')
Time Complexity: O(n)
why: the only way to find the index is by going through the array starting from the first element until it finds an element that has the value ‘X’

//Adding an element
  //To the end of the array
  arr.push(x)
  Time Complexity: O(1)
  why: All it does is add an element and give it an index that’s 1 greater than the index of the last element in the array.
  //To the beginning of the array
  arr.unshift(x)
  Time Complexity: O(n)
  why: Adding an element at the beginning of an array means the new element will have an index of 0. Which means that the index of every other element must be incremented by 1.
  //to any position of the array
  arr.splice()
  Time Complexity: O(n)
  
  
//Remove an element
  //at the end of the array
  arr.pop()
  Time Complexity: O(1)
  //at the start of the array
  arr.shift()
  Time Complexity: O(n)
  //at any position of the array
  arr.splice()
  Time Complexity: O(n)
  
//Concatenate two arrays
  arr.concat(arr2)
  Time Complexity: O(n+m) (n depends on arr' length while m on arr2' length)
  
Other methods like Array.filter(), Array.map(), Array.find(), Array.findIndex(), Array.reduce(), Array.forEach() have a time complexity of O(n)
