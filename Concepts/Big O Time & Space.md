<h1>Computational Complexity Analysis</h1>
<p>As programmers, we often ask ourselves 2 essential questions: how much time does an algorithms need to finish? and how much space does it need for its computation?</p>
<p>Big Θ(Theta), Big O and Big Ω (Omega) are used to standardize talking about these two concepts of time and space. They allow us to express how the runtime scales.</p>
<ul>
<li><b>Big Θ(Theta)</b> is a tight (upper and lower) bound. It tells you what the least and the most amounts of time are.</li>
<li><b>Big Ω (Omega)</b> is a lower bound. It tells you what the least amount of time is.</li>
<li><b>Big O</b> is an upper bound. It cares about the worst-case scenario. When working with large amounts of data, all we mostly care about is Big O.</li>
</ul>
<p>When calculating time and space complexity, you want to drop the constants and the non-dominant terms.</p>
<p>Note: We might still have a sum in a runtime. For example, the expression O(B^2 + A) cannot be reduced without some special knowledge of A and B.</p>
<p>The table below represents big-O complexities (ordered from smallest to largest). n represents the size of the input.</p>
<table align="center">
  <tr>
    <td>Constant Time</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Logarithmic Time</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Linear Time</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Linearithmic Time</td>
    <td>O(nlogn)</td>
  </tr>
  <tr>
    <td>Quadric Time</td>
    <td>O(n^2)</td>
  </tr>
  <tr>
    <td>Cubic Time</td>
    <td>O(n^3)</td>
  </tr>
  <tr>
    <td>Exponential Time</td>
    <td>O(b^n)</td>
  </tr>
  <tr>
    <td>Factorial Time</td>
    <td>O(n!)</td>
  </tr>
</table>
<p><b>Runtime is not a multiple choice question. You should NOT assume that something has a particular runtime by sheer process of elimination. Derive, don't guess</b></p>
<img src="https://miro.medium.com/max/1200/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg" width="800px"></img>

<table align='center'>
  <tr>
    <th>Data Structure</th>
    <th>Accessing</th>
    <th>Searching</th>
    <th>Inserting</th>
    <th>Deleting</th>
    <th></th>
  </tr>
  <tr>
    <td>Arrays</td>
    <td>O(1): By index</td>
    <td>O(n)</td>
    <td>O(n).</br> O(1): If it's at the end</td>
    <td>O(n) </br> O(1): If it's at the end</td>
    <td></td>
  </tr>
    <tr>
    <td>HashTable (If good uniform one)</td>
    <td>N/A</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td></td>
  </tr>
    <tr>
    <td>HashTable (If NOT a good uniform one)</td>
    <td>N/A</td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td></td>
  </tr>
    <tr>
    <td>Singly Linked List</td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td>O(1)</td>
    <td>O(n): at the head </br> O(n): at tail middle</td>
    <td></td>
  </tr>
    <tr>
    <td>Doubly Linked List</td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td>O(1)</td>
    <td>O(1): at head or tail </br> O(n): at middle</td>
    <td></td>
  </tr>
  <tr>
    <td>Stacks</td>
    <td>Peeking: O(1)</td>
    <td>O(n)</td>
    <td>Pushing: O(1)</td>
    <td>Popping: O(1)</td>
    <td>Size(counting items): O(1)</td>
  </tr>
  <tr>
    <td>Queues</td>
    <td>Peeking: O(1)</td>
    <td>O(n)</td>
    <td>Enqueueing: O(1)</td>
    <td>Dequeueing: O(1) </br> Removing other than first: O(n)</td>
    <td></td>
  </tr>
    <tr>
    <td>Priority Queue w/ binary heap</td>
    <td>Peeking: O(1)</td>
    <td>Naive contains: O(n) </br> Contains check w/ hash table: O(1)</td>
    <td>O(logn)</td>
    <td>Naive removing: O(n) </br> Removing w/ hash table: O(logn)</td>
    <td>Binary Heap construction: O(n)</td>
  </tr>
    <tr>
    <td>Binary Search Tree</td>
    <td></td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td></td>
  </tr>
    <tr>
    <td>Balanced Binary Search Tree</td>
    <td></td>
    <td>O(logn)</td>
    <td>O(logn)</td>
    <td>O(logn)</td>
    <td></td>
  </tr>
</table>

<p><b>Amortized time</b> describes how a worst-case happens once in awhile but then won't happen again in a long time so the cost is <b>amortized</b>.</p>

<p>You can derive the runtime several ways. Some Examples are :</p>
<ul>
  <li>Counting the iterations.</li>
  <li>Thinking about what the code "means".</li>
  <li>Visualizing what it does.</li>
  <li>Thinking about what the code is supposed to be doing</li>
  <li> Thinking about how the runtime changes as the input gets bigger.</li>
</ul>

---

<ul> Keep in mind: 
  <li>In general, we can't search an array (even if it's sorted) in better than O(logn) time.</li>
  <li>The vast majority of the time, insertion is in O(1) time.</li>
  <li>Generally speaking, when you see an algorithm with multiple recursive calls, you're looking at exponential runtime. When you see a problem where the number of elements in the problem space gets halved each time, it's likely a O(logn) runtime.</li>
  <li>When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth) where branches is the number of times each recursive call branches.</li>
  <li>Memoization is a very common way to optimize exponential time in recursive algorithms.</li>
  <li>Many sorting algorithms take up extra space.</li>
  <li>To calculate O(n) space consider how many calls exist simultaneously on the call stack (i.e how much memory do you need to have available?)</li>
  <li>the base of a log doesn't matter for big O since logs of different bases are only different by a constant factor. However, this does not apply to exponents. The base of an exponent does matter. </li>
  <li>Understand that the number of inputs matter. If you have 2 different inputs then don't jump to conlusions and say that an algorithms would have O(n^2) time. It could be O(nm). </li>
  <li>The number of times we can halve n until we get 1 is O(log n). </li>
  <li>Exponential/logarithmic relationship: 2^x = n  <==>  log(base 2)n = x</li>
  <img src="https://cdn.kastatic.org/googleusercontent/CfdIRZu_iMA_DFp7EilcK9igLFA42jd2hksGilRMBdINxoLKxj2LAWCjQxvj8m9E3Ik6tmVfPAFIx4whUTPp-KZw" width="200px" ></img>
 
</ul>
  
