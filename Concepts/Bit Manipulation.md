<h2>Bit Manipulation</h2>

<p><b>Bit manipulation</b> is the process of applying logical operations on a sequence of bits to achieve a required result. It is an act of algorithmically manipulating bits or other pieces of data that are shorter than a word. Bit manipulation is used in a variety of problems. Sometimes, the question explicitly calls for bit manipulation. Other times, it's simply a useful technique to optimize your code. You should be comfortable doing bit manipulation by hand, as well as with code.</p>

<p>Humans use the decimal system to represent numbers (e.g. 1,2,3,4,5...) but computers store them in the binary format (which is a combination of 0s and 1s).</p>

Below is a table of bitwise operators and their descriptions:
<table>
  <tr>
    <th>Operator</th>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>&</td>
    <td>AND</td>
    <td>Sets each bit to 1 if both bits are 1</td>
  </tr>
  <tr>
    <td>|</td>
    <td>OR</td>
    <td>Sets each bit to 1 if one of two bits is 1</td>
  </tr>
  <tr>
    <td>^</td>
    <td>XOR</td>
    <td>Sets each bit to 1 if only one of two bits is 1</td>
  </tr>
  <tr>
    <td>~</td>
    <td>NOT</td>
    <td>Inverts all the bits</td>
  </tr>
  <tr>
    <td><<</td>
    <td>Zero fill left shift	</td>
    <td>Shifts left by pushing zeros in from the right and let the leftmost bits fall off</td>
  </tr>
  <tr>
    <td>>></td>
    <td>Signed right shift</td>
    <td>Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off</td>
  </tr>
  <tr>
    <td>>>></td>
    <td>Zero fill right shift</td>
    <td>Shifts right by pushing zeros in from the left, and let the rightmost bits fall off</td>
  </tr>
</table>


<h3>Facts and Tricks</h3>
<p>In the expressions below, we use 1s and 0s to indicate a sequence of 1s and 0s respectively:</p>
<ul>
  <li>x ^ 0s = x</li>
  <li>x ^ 1s = ∼x</li>
  <li>x ^ x = 0</li>
  <li>x & 0s = 0</li>
  <li>x & 1s = x</li>
  <li>x & x = x</li>
  <li>x | 0s = x</li>
  <li>x | 1s = 1s</li>
  <li>x | x = x</li>
</ul>

<h3>Positive vs Negative Numbers</h3>
<p>A positive number is represented as itself while a negative number is represented as the two's complement of its absolute value (with a 1 in its sign bit to indicate a negative value). In other words, the binary representation of-K (negative K) as a N-bit number is c one at ( 1, 2N -1 - K). Another way to look at this is that we invert the bits in the positive representation and then add 1. 3 is 011 in binary. Flip the bits to get 100, add 1 to get 101, then prepend the sign bit (1) to get 1101.</p>


<h3>Arithmetic vs. Logical Right Shift</h3>
<p>There are two types of right shift operators. The arithmetic right shift essentially divides by two. The logical right shift does what we would visually see as shifting the bits. This is best seen on a negative number.</p>
<p>- In a logical right shift, we shift the bits and put a 0 in the most significant bit. It is indicated with a  >>>  operator.</p>
<p>- In an arithmetic right shift, we shift values to the right but fill in the new bits with the value of the sign bit.
This has the effect of(roughly) dividing by two. It is indicated by a  >>  operator.</p>

<h3>Common Bit Tasks: Getting and Setting</h3>
<p><b>Get Bit:</b> shifts 1 over by i bits, creating a value that looks like 00010000. By performing an AND with num, we clear all bits other than the bit at bit i. Finally, we compare that to 0. If that new value is not zero, then bit i must have a 1. Otherwise, bit i is a 0.</p>
<p><b>Set Bit:</b> shifts 1 over by i bits, creating a value like 00010000. By performing an OR with num, only the value at bit i will change. All other bits of the mask are zero and will not affect num.</p>
<p><b>Clear Bit:</b> operates in almost the reverse of setBit. First, we create a number like 11101111 by creating the reverse of it (00010000) and negating it. Then, we perform an AND with num. This will clear the ith bit and leave the remainder unchanged.</p>
<p><b>Update Bit:</b> To set the ith bit to a value v, we first clear the bit at position i by using a mask that looks like 11101111. Then, we shift the intended value ,v, left by i bits. This will create a number with bit i equal to v and all other bits equal to 0. Finally, we OR these two numbers, updating the ith bit if v is 1 and leaving it as 0 otherwise.</p>


---

<ul> Keep in mind: 
  <li>Operations occur bit-by-bit, with what's happening on one bit never impacting the other bits. </li>
  <li>Computers typically store integers in two's complement representation.</li>
</ul>
