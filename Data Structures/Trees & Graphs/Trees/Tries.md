<h2>Tries</h2>
<img src="https://miro.medium.com/max/1396/1*e3549k5A9oCLn-vZTxsFEA.gif"></img>

<p>A <b>trie</b> (sometimes called a prefix tree) is a funny data structure. A trie is a variant of an n-ary tree in which characters are stored at each node. 
  Each path down the tree may represent a word. The * nodes (sometimes called "null nodes") are often used to indicate complete words. Very commonly, a trie is 
  used to store the entire (English) language for quick prefix lookups. While a hash table can quickly look up whether a string is a valid word, it cannot tell 
  us if a string is a prefix of any valid words. A trie can do this very quickly.</p>
<p>A trie can check if a string is a valid prefix in 0(K) time, where K is the length of the string.</p>
<p>Many problems involving lists of valid words leverage a trie as an optimization.</p>
