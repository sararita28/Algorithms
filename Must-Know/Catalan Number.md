<b>C(n) = Ci(2n,n)/n+1</b> where Ci is the Binomial Coefficient

![image](https://user-images.githubusercontent.com/67070886/186471604-7c5cc160-0b8b-43d1-9939-0c44379293d2.png)

C(0) * C(2) + C(2) * C(0) + C(1) * C(1)

C(n)= C(i) * C(n-i-1)

Below is the solution to Leetcode's 96. Unique Binary Search Trees
```
var numTrees = function(n) {
    return CalculateCoeff(2*n,n) / (n+1);
}

function CalculateCoeff (n, k) {
    let res = 1;
    for (let i=0; i<k; i++) {
        res = (n-i) / (i+1);
    }
    return res;
}

```
