🚧 This repository is under construction. I am simply using it for note-taking purposes (for now). Eventually, I would want to organize it better to benefit other people and help them in their learning and understanding of data structures and algorithms. The language used in this rep is <b>Javascript.</b>

---

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
<p><b>Amortized time</b> describes how a worst-case happens once in awhile but then won't happen again in a long time so the cost is <b>amortized</b>.</p>

<p>You can derive the runtime several ways. Some Examples are :</p>
<ul>
  <li>Counting the iterations.</li>
  <li>Thinking about what the code "means".</li>
  <li>Visualizing what it does.</li>
</ul>

---

<ul> Keep in mind: 
  <li>In general, we can't search an array (even if it's sorted) in better than O(logn) time.</li>
  <li>The vast majority of the time, insertion is in O(1) time.</li>
  <li>When you see a problem where the number of elements in the problem space gets halved each time, it's likely a O(logn) runtime.</li>
  <li>When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth) where branches is the number of times each recursive call branches.</li>
  <li>Many sorting algorithms take up extra space.</li>
  <li>To calculate O(n) space consider how many calls exist simultaneously on the call stack (i.e how much memory do you need to have available?)</li>
  <li>the base of a log doesn't matter for big O since logs of different bases are only different by a constant factor. However, this does not apply to exponents. The base of an exponent does matter. </li>
  <li>Some ways to figure out what the runtime is is by <b>thinking about what the code means</b>, or <b>visualizing what it does</b> or <b>thinking about what the code is supposed to be doing</b> or also <b>thinking about how the runtime changes as the input gets bigger.</b></li>
  <li>Understand that the number of inputs matter. If you have 2 different inputs then don't jump to conlusions and say that an algorithms would have O(n^2) time. It could be O(nm). </li>
  <li>Generally speaking, when you see an algorithm with multiple recursive calls, you're looking at exponential runtime</li>
  <li>Memoization, is a very common one to optimize exponential time recursive algorithms.</li>
  <li>The number of times we can halve nuntil we get 1 is O(log n). Exponential/logarithmic relationship: 2^x = n  <==>  log(base 2)n = x</li>
  <img src="https://cdn.kastatic.org/googleusercontent/CfdIRZu_iMA_DFp7EilcK9igLFA42jd2hksGilRMBdINxoLKxj2LAWCjQxvj8m9E3Ik6tmVfPAFIx4whUTPp-KZw" width="200px" ></img>
 
</ul>
  

---

<h1>Data Structures</h1>
<p><b>Definition:</b> A data structure (DS) is a way of organizing data so that it can be used efficiently.</p>
<p><b>Why are they important?: </b>They're essential in creating fast and powerful algorithms, they help manage and organize data, they make code cleaner and easier to understand. They can make the difference between having an "okay" product to having an outstanding one.</p>
<p>An <b>abstract data type (ADT)</b> is an abstraction of a data structure which provides only the interface to which a data structure must adhere to. The interface doesn't give specific details about how something should be implemented.<em>Analogy: </em> We want to go from one place to another using a mode of transportation (this is our abstract data type). How exactly we do that is our data structure. <em>Examples: </em> In the table below you have a few ADT and some possible ways of implementing them (DS).</p>
<table align="center">
  <tr>
    <th>Abstraction Data Type</th>
    <th>Data Structure</th>
  </tr>
  <tr>
    <td>List</td>
    <td>Dynamic Array/ Linked List</td>
  </tr>
  <tr>
    <td>Queue</td>
    <td>Linked List based Queue / Array based queue / Stack based Queue</td>
  </tr>
  <tr>
    <td>Map</td>
    <td>Tree map / Hash Map / Hash table</td>
  </tr>
</table>

<h2>Types of Data Structures:</h2>
<ul>
    <li>Arrays</li>
    <li>Linked Lists</li>
    <li>Trees, Tries & Graphs</li>
    <li>Stacks & Queues</li>
    <li>Heaps</li>
    <li>HashTables</li>
</ul>

The table below represents a list of the absolute, must-have knowledge:
<table align="center">
  <tr>
    <th>Data Structures</th>
    <th>Algorithms</th>
    <th>Concepts</th>
  </tr>
  <tr>
    <td>Linked Lists</td>
    <td>Breadth-First Search</td>
    <td>Bit Manipulation</td>
  </tr>
    <tr>
    <td>Trees, Tries & Graphs</td>
    <td>Depth-First Search</td>
    <td>Memory (stack vs. heap)</td>
  </tr>
    <tr>
    <td>Stacks & Queues</td>
    <td>Binary Search</td>
    <td>Recursion</td>
  </tr>
    <tr>
    <td>Heaps</td>
    <td>Merge Sort</td>
    <td>Dynamic Programming</td>
  </tr>
    <tr>
    <td>Hash Tables</td>
    <td>Quick sort</td>
    <td>Big O time & space</td>
  </tr>
</table>
<p><i>For each of these topics, make sure you understand how to use and implement them and, where applicable, the space and time complexity. f you don't feel very, very comfortable with each of the data structures and algorithms listed, practice implementing them from scratch. In particular, hash tables are an extremely important topic. Make sure you are very comfortable with this data structure. Be sure you are comfortable with dynamically resizable arrays/lists</i><p> </br>

The table below is the powers of 2 table. It is useful for many questions involving scalability or any sort of memory limitation.
<table align="center">
  <tr>
    <th>Power of 2</th>
    <th>Exact value (X)</th>
    <th>Approx. value</th>
    <th>X Bytes into MB, GB, etc...</th>
  </tr>
  <tr>
    <td>7</td>
    <td>128</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>8</td>
    <td>256</td>
    <td></td>
    <td></td>
  </tr>
    <tr>
    <td>10</td>
    <td>1024</td>
    <td>1 thousand</td>
    <td>1 KB</td>
  </tr>
  <tr>
    <td>16</td>
    <td>65,536</td>
    <td></td>
    <td>64 KB</td>
  </tr>
  <tr>
    <td>20</td>
    <td>1,048,576</td>
    <td>1 million</td>
    <td>1 MB</td>
  </tr>
  <tr>
    <td>30</td>
    <td>1,073,741,824</td>
    <td>1 billion</td>
    <td>1 GB</td>
  </tr>
  <tr>
    <td>32</td>
    <td>4,294,967,296</td>
    <td></td>
    <td>4 GB</td>
  </tr>
  <tr>
    <td>40</td>
    <td>1,099,511,627,776</td>
    <td>1 trillion</td>
    <td>1 TB</td>
  </tr>
</table>
  
  
