<h2>Fenwick Tree (a.k.a Binary Index Tree)</h2>

<p><b>Fenwick Tree</b> is a DS that supports sum range queries as well as setting values in a static array and getting the value of the prefix sum up some index efficiently. </p>

<p><b>Fenwick Tree Complexity</b></p>
<table>
  <tr>
    <td>Construction</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Point Update</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Range Sum</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Range Update</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Adding Index</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Removing Index</td>
    <td>N/A</td>
  </tr>
</table>

<p>Unlike a regular array, in a Fenwick Tree, a specific cell is responsible for other cells as well. The position of the <b>least significant bit (LSB)</b> determines the <b>range of the responsibility</b> that cell has to the cells below itself. You can determine that by checking the index's number in binary. In a Fenwick tree we may compute the <b>prefix sum</b> up to a certain index, which ultimately lets us perform range sum queries. With range queries, you cascade down from the current index by <b>continuously removing the LSB</b> till 0.</p>

<h4>Fenwick Tree & Point Update </h4>
<p>Point update is the opposite of prefix sum/ range queries. Instead of removing the LSB, we add it.</p>
