 For each problem you encounter, do the following:
  <ol>
  <li>Try to solve the problem on your own. When you're solving a problem, make sure to think about the time and space efficiency.</li>
  <li>Write the code on paper.</li>
  <li>Test your code on paper</li>
  <li>Type your paper code as-is into a computer.</li>
  <li>Try to do as many mock interviews as possible.</li>
</ol>

<h3>Walking through a problem</h3>
<ol>
  <li><b>Listen:</b> Pay very close attention to any information in the problem description. Be sure that you've mentally recorded any <i>unique</i> information in the problem (You might even find it useful to write pertinent information on the whiteboard).</li>
  <li><b>Debug your own examples: </b>Not too small, must be specific, not a special case (special cases can be very deceiving).</li>
  <li><b>Get a brute-force solution</b> as soon as possible. Explain what the space and time complexity is and then dive into improvements.</li>
  <li><b>Optimize:</b> Walk through your brute force with BUD Optimization (see below). Look for any unused info, reverse engineer your thought process. How did you solve it? Sometimes, seeing a different example will unclog your mind and help you see a pattern in the problem. Also, having an incorrect solution might help you find a correct solution. Make time vs space tradeoff. Use a hash table. Think about the best conceivable runtime (see below).</li>
  <li><b>Walk through:</b> Make sure you understand each detail before you start coding. Take a moment to solidify your understanding of the algorithm. Walk through your algo and get a feel for the structure of your code. Know what the variables are and when they change. If you don't understand exactly what you're about to write, you'll struggle to code it.</li>
  <li><b>Implement:</b> Modularize your code and refactor it, clean it up. Writing modular code means separating isolated chunks of code out into their own methods. Do error checks. Use other classes/structures where appropriate. Use good variable names.</li>
  <li><b>Test and fix any bugs:</b> Start with a conceptual test, by reading and analyzing what each line of code does. Think about it like you're explaining the lines of code to someone. Does the code do what you think it should do? Use small test cases, test your code against special cases, extreme cases, null or single element values. When you find bugs, analyze them and ensure that your fix is the best one.</li>
  </ol>

<h3>Optimization Techniques</h3>
<ul>
  <li><b>BUD Technique:</b> BUD stands for Bottlenecks, Unnecessary work, Duplicated work. These are the 3 most common things an algorithm can waste time doing.A bottleneck is a part of your algorithm that slows down the overall runtime.</li>
  <li><b>DIY Technique:</b> When you get a question, try just working it through intuitively on a real example. Use a nice, big example, and intuitively-manually, solve it. Then afterwards, think hard about how you solved it. Reverse engineer your own approach. Be particularly aware of any 'optimizations' you automatically made.</li>
  <li><b>Simplify and Generalize Technique</b>: Implement a multi-step approach: simplify/tweak some constraint then solve it and finally once you have an algorithm for the simplified problem, try to adapt it for the more complex version.</li>
  <li><b>Base Case and Build Technique</b>: solve the problem first for a base case then build up from there. (Base Case and Build algorithms often lead to natural recursive algorithms).</li>
  <li><b>Data Structure Brainstorm Technique</b>: Simply run through a list of data structures and try to apply each one.</li>
</ul>

<h3>Best Conceivable Runtime (BCR)</h3>
<p>Considering the best conceivable runtime can offer a useful hint for some problem. The best conceivable runtime is, literally, the best runtime you could conceive of a solution to a problem having. You can easily prove that there is no way you could beat the BCR.</p>
<p>Another place where BCR is useful is that when comparing your runtime to it, if they're the same, it tells us that we're "done" in terms of optimizing the runtime, and we should therefore turn our efforts to the space complexity.</p>

---

<p>A good exercise to practice strings,arrays,and general data structures is to implement your own version of HashTable and Array List.</p>
<p>be comfortable implementing in-order, post-order, and pre-order traversal. The most common of these is in-order traversal.</p>

