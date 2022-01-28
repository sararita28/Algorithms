<h2>Arrays (Static and Dynamic)</h2>
<p><b>Static Arrays: </b>are fixed length containers containing n elements indexable from the range [0, n-1]. Static arrays are used a lot. Some examples of their usage include but are not limited to: storing and accessing sequential data, temporarily storing objects, used by IO routines and buffers, lookup tables and inverse lookup tables, return multiple values from a function, dynamic programming to cache answers to subproblems...</p>
<p><b>Array Complexity</b></p>
<table>
  <tr>
    <th>Operation</th>
    <th>Static Array</th>
    <th>Dynamic Array</th>
  </tr>
  <tr>
    <td>Access</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Insertion</td>
    <td>N/A</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Appending</td>
    <td>N/A</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Deletion</td>
    <td>N/A</td>
    <td>O(n)</td>
  </tr>
</table>

<h4>Using Hash tables</h4>
<p>There are a number of ways of implementing a hash table. Here's a simple and common one: We use an array of linked lists and a hash code function.</p>
<p>To insert a key:</p>
<ol>
  <li>Compute the key's hash code.</li>
  <li>Map the hash code to an index in the array.</li>
  <li>Store the key and value in the index (use a linked list  to avoid collisions).</li>
</ol>
<p>To retrieve a value pair by its key:</p>
<ol>
  <li>Same as above.</li>
  <li>Same as above.</li>
  <li>Search through the linked list for the key value pair.</li>
</ol>

<p>Alternatively to using an array of linked lists, you can use the hash table with a balanced binary search tree which gives O(logn) but uses less space.</p>

<h4>ArrayList & Resizable Arrays</h4>
<p><i>When you need an array-like DS that offers dynamic resizing you'd usually use an ArrayList</i>.</p>
<p>An <b>ArrayList</b> is an array that resizes itself as needed while still providing O(1) access. Typically, when the array is full, it doubles in size. Doubling takes O(n) time but is ammortized, so insertion is still O(1).</p>

<h3>Suffix Arrays</h3>
<p>A <b>suffix</b> is a substring at the end of a string of characters. A <b>suffix array</b> is an array which contains all the <em>sorted</em> suffixes of a string. The suffix array provides a space efficient alternative to a <b>suffix tree</b> which itself is a compressed version of a <b>trie.</b> Suffix arrays can do everything suffix trees can, with some additional information such as a Longest Common Prefix (LCP) array.</p>

<h4>The Longest Common Prefix (LCP) array</h4>
<p>The LCP array is an array where each index tracks and stores how many characters 2 sorted adjacent suffixes have in common. </p>

<h4>Using Suffix arrays & LCP arrays to find unique substrings</h4>
<p>For every string, there are exactly n(n+1)/2 substrings</p>
<p>The number of unique substrings in a string is: #of substrings - duplicates</p>

---

<ul> Keep in mind: 
  <li>Array questions and string questions are often interchangeable.</li>
  <li>A common approach in string manipulation is to edit the string starting from the end and working backwards.</li>
  </ul>
  
---
