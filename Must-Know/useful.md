- Create a 2D array :  ```let arr = Array.from(Array(m), () => new Array(n));```
- Calculate the absolute difference between 2 numbers a and b: ```Math.abs(a - b)```
- Manually set specific number n of digits after decimal ```str.toFixed(n)```
- Regex to remove all special chars : ```let result = stringToReplace.replace(/[^\w\s]/gi, '')```
- Check if char is letter : ```(/[a-zA-Z]/).test(char)``` 
- Convert character to its keycode : ```let code = ('a').charCodeAt(0)```
- Convert keycode to character : ```let char = String.fromCharCode(code)```
- Printable ASCII table : https://theasciicode.com.ar/
- Split a string : ``` str.split('')``` //splits the string by characters (you can also split it by spaces or something else or put a limit parameter). Returns an array of the result
- Join array : ```arr.join('')``` //You can join the strings by connecting them with nothing or a space, a comma or anything else. Returns a string of the result 
- ```a % b``` is the remainder when dividing a by b until it is no longer dividable by b. For example 5 mod 2 is 1
```
a % a = 0
a % b = a (for a < b)
```
