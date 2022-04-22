### NP-Complete
The name "NP-complete" is short for "nondeterministic polynomial-time complete". In this name: <br>
* Nondeterministic means that no particular rule is followed to make the guess.
* Polynomial time refers to an amount of time that is considered "quick" for a deterministic algorithm to check a single solution, or for a nondeterministic Turing machine to perform the whole search.
* "Complete" refers to the property of being able to simulate everything in the same complexity class. <br>

More precisely, each input to the problem should be associated with a set of solutions of polynomial length, whose validity can be tested quickly (in polynomial time) such that the output for any input is "yes" if the solution set is non-empty and "no" if it is empty. The complexity class of problems of this form is called NP, an abbreviation for "nondeterministic polynomial time". <b>A problem is said to be NP-hard if everything in NP can be transformed in polynomial time into it even though it may not be in NP. Conversely, a problem is NP-complete if it is both in NP and NP-hard. </b>The NP-complete problems represent the hardest problems in NP. If some NP-complete problem has a polynomial time algorithm, all problems in NP do. The set of NP-complete problems is often denoted by NP-C or NPC. <b>Although a solution to an NP-complete problem can be verified "quickly", there is no known way to find a solution quickly. That is, the time required to solve the problem using any currently known algorithm increases rapidly as the size of the problem grows.</b> As a consequence, determining whether it is possible to solve these problems quickly, called the P versus NP problem, is one of the fundamental unsolved problems in computer science today.<b> NP-complete problems are often addressed by using heuristic methods and approximation algorithms.</b> 
<br>

### In computational complexity theory, a problem is NP-complete when:
<ul>
<li>It is a problem for which the correctness of each solution can be verified quickly (namely, in polynomial time) and a brute-force search algorithm can find a solution by trying all possible solutions.</li>
<li>The problem can be used to simulate every other problem for which we can verify quickly that a solution is correct. In this sense, NP-complete problems are the hardest of the problems to which solutions can be verified quickly. If we could find solutions of some NP-complete problem quickly, we could quickly find the solutions of every other problem to which a given solution can be easily verified.</li>
</ul>

### Some examples of NP-complete problems:
- Traveling salesman.
- Knapsack problem.

### In short
- A problem p in NP is NP-complete if every other problem in NP can be transformed (or reduced) into p in polynomial time.<br>
- A problem is NP-complete if it is both NP and NP-hard. NP-complete problems are the hardest problems in NP. <br>
- It is not known whether every problem in NP can be quickly solved—this is called the P versus NP problem.<br>
- If any NP-complete problem can be solved quickly, then every problem in NP can, because the definition of an NP-complete problem states that every problem in NP must be quickly reducible to every NP-complete problem (that is, it can be reduced in polynomial time). Because of this, it is often said that NP-complete problems are harder or more difficult than NP problems in general.<br>
- It is not known whether any polynomial-time algorithms will ever be found for NP-complete problems.<br>
- When an NP-complete problem must be solved, one approach is to use a polynomial algorithm to approximate the solution; the answer thus obtained will not necessarily be optimal but will be reasonably close.
