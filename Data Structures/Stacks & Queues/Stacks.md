<h2>Stacks</h2>
<p>A <b>stack</b> is a one-ended linear data structure which models a real world stack by having two primary operations(i.e. push and pop). Elements in a stack always get removed and added to the top of the pile (LIFO - Last in, first out). It's critical to understand that <b>you ONLY have access to the first element of a stack</b>. Some examples of their usage include but are not limited to: undo mechanisms in text editors, matching brackets and braces in compilers, model a pile of books or plates, support recursion by keeping track of previous function calls, do a depth first search on a graph ... </p>

<h3>Implementing a Stack:</h3>
<p>In certain types of problems, it can be favorable to store data in a stack rather than an array. A stack uses the following operations:</p>
<ul>
  <li><b>pop():</b> removes the top item from the stack.</li>
  <li><b>push(item):</b> adds an item to the top of the stack.</li>
  <li><b>peek():</b> returns the top of the stack.</li>
  <li><b>isEmpty():</b> returns true if the stack is empty.</li>
</ul>

<p>Unlike an array, a stack doesn't offer constant time access to the kth element, however, it does offer constant time adds and removes as it doesn't require shifting elements around.</p>
<p>A stack can also be implemented using a linked list if items are removed and added from the same side.</p>

<p><b>Stacks Complexity</b></p>
<table>
  <tr>
    <td>Pushing</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Popping</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Peeking</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Searching</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>O(1)</td>
  </tr>
</table>




---

<ul> Keep in mind: 
  <li>Questions on stacks and queues will be much easier if you're familiar with the ins and outs of the DS.</li>
  <li>One case where stacks are often useful is in certain recursive algorithms. Sometimes you need to push temporary data onto a stack as you recurse but then remove them as you backtrack.</li>
  <li>A stack can also be used to implement a recursive algorithm iteratively.</li>
</ul>
