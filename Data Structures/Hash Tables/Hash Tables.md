<h2>Hash Table</h2>
<p>A <b>hash table (HT)</b> is a DS that provides a mapping from keys to values using a technique called <b>hashing</b>, for highly efficient lookup. All of the keys have to be unique, but values don't. HTs are often used to track item frequencies. Key-value pairs can be of any type, but the keys need to be <em>hashable</em>. A <b>hash function</b> is a function that maps a key 'x' to a whole number in a fixed range. We can also define hash functions for arbitrary objects (such as strings, lists, tuples ...)</p>
<ul><h4>Properties of Hash functions:</h4>
  <li>- If H(x)=H(y) then objects x and y <b>might be equal</b>, but if H(x)≠H(y) then x and y are <b>certainly not equal</b>. This means that instead of comparing x and y directly, a smarter approach is to first compare their hash values (and only if the hash values match do we then compare them directly).</li>
  <li>- A hash function must be <b>deterministic</b>. Meaning that if H(x) = y then H(x) must always produce y and never another value.</li>
  <li>- We try very hard to make them <b>uniform</b> to minimize the number of hash collisions. A hash collision is when 2 objects x,y hash to the same value (i.e. H(x)=H(y)).</li>
</ul>
<h4>What makes a key "hashable"?</h4>
<p>We say that a key of type T is hashable if it is immutable and we have a hash function H(k) defined for all keys k of type T.</p>

<h4>How does a hash table work?</h4>
<p>A hash table is just a fancy word for an 'array'. You can have a very fast insertion, lookup and remova of O(1) time using a hash function as a way to index into a hash table. However, the constant time behavior attributed to hash tables is only true if you have a good <b>uniform hash function.</b></p>
<h4>How do we handle collisions?</h4>
<ul><p>There are many hash collision resolution techniques. The 2 most popular being: <p>
  <li><b>Separate chaining</b>: deals with hash collisions by maintaining a DS (usually a linked list) to hold all the different values which hashed to a particular value <b>(basically, you have multiple auxiliary DS)</b>.</li> 
  <li><b>Open addressing</b>: deals with hash collisions by finding another place within the hash table for the object to go by offsetting it from the position to which it hashed to <b>(basically, everything is kept within one big array)</b>.</li>
</ul>

<p><b>Hash Table Complexity</b></p>
<table>
  <tr>
    <th>Operation</th>
    <th>If it's a good uniform hash function</th>
    <th>Worst</th>
  </tr>
  <tr>
    <td>Insertion</td>
    <td>O(1)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Removal</td>
    <td>O(1)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(1)</td>
    <td>O(n)</td>
  </tr>
</table>

<p>If the number of collisions (in the hash table) is very high the worst case is O(n) (n being the number of keys). However, we generally assume a good implementation that keeps collision to a minimum in which case the lookup time is O(1).</p>

<h4>Hash Table & Separate Chaining</h4>
<p><b>Separate chaining</b> is one of many strategies to deal with hash collisions by maintaining an auxiliary DS (the most popular is a linked list, for a worst-case lookup runtime of O(n) which would only happen if the data is very strange and/or the hash function is very poor) to hold all the different values which hashed to a particular value. Once the HT is full you should create a new one with a larger capacity and rehash all the items inside the old HT and disperse them throughout the new HT at different locations. As long as the number of collisions is fairly small, chaining with linked lists is very efficient.</p>

<h4>Hash Table & Open Addressing</h4>
<p>When using open addressing as a collision-resolution technique, the key-value pairs are stores in the table/array itself (as opposed to using an auxiliary DS). This means that we need to care a great deal about the size of the hash table and how many elements are currently in the table so you need to keep track of the load factor.</p>
<p>Load factor = items in table / size of table</p>
<p>Constant time (O(1)) assumes the load factor α is kept below a certain fixed value/treshold meaning that once it gets above it we need to grow the table size (ideally exponentially).</p>
<p>If you try inserting a key/value pair into the table but it's occupied, you try offsetting the current position subject to a probing sequence P(x) till you find an unoccupied slot.</p>
<ul><p>There's an infinite amount of probing sequences to choose from. Some of them include: </p>
  <li>Linear probing: P(x) = ax + b where a,b are constants.</li>
  <li>Quadratic probing: P(x) = ax^2 + bx + c where a,b,c are constants and a≠0.</li>
  <li>Double hashing: P(k,x) = x*H2(k) where H2(k) is a secondary hash function.</li>
  <li>Pseudo random number generator: P(k,x) = x*RNG(H(k),x) where RNG is a random number generator function seeded with H(k).</li>
</ul>
<p>Note: Most randomly selected probing sequences modulo N will produce a cycle <em>shorter than the table size</em> which will cause an infinite loop.</p>
<p>The way to fix that and handle probing functions which produce cycles shorter than the table size is to avoid such functions altogehther and only use probing functions that produce a cycle exactly the length of your table elements (with a few exceptions).</p>

<h4>Hash Tables & Linear Probing</h4>
<p><b>Linear Probing</b> is a probing method which probes according to a linear formula, specifically: P(x)=ax+b where a≠= and a,b are constants.</p>
<p><b>Q:</b> Which value(s) of the constant a in P(x) = ax produce a full cycle modulo N?</p>
<p><b>A:</b> A value when a and N are <b>relatively prime</b> meaning that a and N's Greatest common denominator(GCD) is 1. So, when GCD(a,N)=1 the probing function P(x) is able to generate a complete cycle and you'll always be able to find an empty bucket.</p>

<h4>Hash Table & Quadratic Probing</h4>
<p><b>Quadratic probing</b> is a probing method which probes according to a quadratic formula, specifically: P(x) = ax^2 + bx + c where a,b,c are constants and a≠0. Quadratic probing have the issue that they easily produce cycles, causing an infinite loop.</p>
<p><b>Q: </b>How do we pick a probing function which always works?</p>
<p><b>A: </b>3 of the most popular approaches are: </p>
<ol>
  <li>Let P(x) = x^2 , keep the table size a prime number > 3 and also keep α<= 1/2</li>
  <li>Let P(x) = (x^2 + x)/2 and keep the table size a power of 2</li>
  <li>Let P(x) = (-1^x)*x^2 and keep the table size a prime number N where N ≡(is congruent to) 3 mod 4</li>
</ol>

<h4>Hash Tables & Double Hashing</h4>
<p><b>Double Hashing </b>is a probing method which probes according to a constant multiple of another hash function, specifically: P(k,x) = x*H2(k) where H2(k) is a secondary hash function. Note: H2(k) must hash the same type of keys as H1(k)</p>
<p><b>Q: </b>Since DH reduces to linear probing at runtime, we may end up with a linear probing function in which case we have a cycle. How do we fix this?</p>
<p><b>A: </b>You pick the table size to be a prime number and also compute the value of	δ. δ=H2(k) mod N. However, if δ=0 you are going to be stuck in a cycle so when this happens, set δ=1</p>
<p><b>Q: </b>How do we construct our secondary hash function (H2(k))</p>
<p><b>A: </b>There are many well known high quality hash functions for the fundamental data types that we can use and combine to construct the secondary hash function. Frequently, they're picked from a pool of hash functions called <b>universal hash functions</b>.</p>

<h4>Removing an element in a hash table using Open Addressing</h4>
<p>When we remove an element we're going to place a unique <b>marker called a tombstone</b> (instead of null) to indicate that a (k,v) pair was in the bucket but has been removed. This will tell you, when searching for elements, that the bucket should be skipped. If you don't do that, then during a search, you will see that the bucket says 'null' and assume that the element you're looking for is simply not in the table.</p>
<p><b>Q: </b>Then how do you deal with the issue of cluttering tombstones that are counted as filled slots and that increase the load factor?</p>
<p><b>A: </b>Tombstones will be removed when the table is resized. Also, you can replace tombstones with (k,v) pairs during the insertion. Another optimization is called <b>lazy deletion/relocation</b>. Basically you replace the first tombstone you encounter with the value you did a lookup for then replace the old one with a null token. And next time you lookup the key, it'll be found much faster.</p>
