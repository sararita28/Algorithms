* <b>for </b> - loops through a block of code a number of times. Should be used if number of iteration is known.
* <b>for ... in</b> - loops through the properties of an object one by one. Can be array indexes or key-value pairs. If the object contains key-value pairs the for/in loop 
will print out each key that exists, but it does not guarantee that keys within key value pairs will always be accessed in the same order.
* <b>for ... of</b> - (similar to for/in but newer and automatically uses an iterator), loops through the values of an iterable object one by one. Does not guarantee that 
keys within key-value pairs will always be accessed in the same order. The for-of loop also is NOT a replacement for the for-in loop. <br>
<b> A good way to tell the for-of loop and for-in loop apart is to remember which data they return. The for-of loop returns values, while the for-in loop 
returns keys or indexes. </b>
* <b>while</b> - loops through a block of code while a specified condition is true
* <b>do ... while</b> - loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.

<h4> Choosing the Right For Loop </h4>
Although for loops are all a type of iteration mechanism, different types have different specific behaviors. Choosing the wrong type of Javascript for loop 
can cause unexpected results and introduce bugs that are tricky to fix. Whenever you use a Javascript framework like Angular or JQuery, it’s almost always 
better to use the for loops variations built into the framework. If you’re ever in doubt, refer to the framework’s documentation.
