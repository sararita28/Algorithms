<h2>Arrays (Static and Dynamic)</h2>
<img src="https://i.stack.imgur.com/UIwm1.png"/>
<p><b>Static Arrays: </b>are fixed length containers containing n elements indexable from the range [0, n-1]. Static arrays are used a lot. Some examples of their usage include but are not limited to: storing and accessing sequential data, temporarily storing objects, used by IO routines and buffers, lookup tables and inverse lookup tables, return multiple values from a function, dynamic programming to cache answers to subproblems...</p>
<p><b>Dynamic Arrays: </b>are arrays that either increase or decrease in size automatically.</p>
<h4><em>Important note: JavaScript is not typed dependent so there is no static array. JavaScript directly allows arrays as dynamic only.</em></h4>

<p align="center"><b>(Dynamic) Array Time Complexity</b></p>
<table align="center">
  <tr>
    <td>Accessing (by index)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Searching (linearly)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Inserting </br> </td>
    <td>O(n) </br>(O(1) if it's at the end)</td>
  </tr>
  <tr>
    <td>Removing/Deleting</td>
    <td>O(n) </br>(O(1) if it's at the end)</td>
  </tr>
</table>

<p align="center"><i>Note: inserting and removing are in O(n) since, in order to add an element at the beginning/middle of an array, you also need to update the rest of the elements' indices.</i></p>

<h3>Common Array Sorting Algorithms</h3>
<table align="center">
  <tr>
    <th>Algorithm</th>
    <th>Time Complexity</th>
    <th>Space Complexity</th>
  </tr>
  <tr>
    <td>Quicksort</td>
    <td>O(n^2)</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Mergesort</td>
    <td>O(nlogn)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Bubble sort</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Insertion sort</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Selection sort</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Bucket sort</td>
    <td>O(n^2)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Radix sort</td>
    <td>O(nk)</td>
    <td>O(n+k)</td>
  </tr>
</table>

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
