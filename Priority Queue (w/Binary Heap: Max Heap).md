//code source: Geeksforgeeks

var H = Array(50).fill(0);
var size = -1;
 
// Function to return the index of the parent node of a given node
function parent(i){
    return parseInt((i - 1) / 2);
}
 
// Function to return the index of the left child of the given node
function leftChild(i){
    return parseInt((2 * i) + 1);
}
 
// Function to return the index of the right child of the given node
function rightChild(i){
    return parseInt((2 * i) + 2);
}
 
// Function to shift up the node in order to maintain the heap property
function shiftUp(i) {
    while (i > 0 && H[parent(i)] < H[i]) {
        // Swap parent and current node
        swap(parent(i), i);
 
        // Update i to parent of i
        i = parent(i);
    }
}
 
function swap(i, j){
    var temp = H[i];
    H[i] = H[j];
    H[j] = temp;
}
 
// Function to shift down the node in order to maintain the heap property
function shiftDown( i){
    var maxIndex = i;
 
    // Left Child
    var l = leftChild(i);
 
    if (l <= size && H[l] > H[maxIndex]) {
        maxIndex = l;
    }
 
    // Right Child
    var r = rightChild(i);
 
    if (r <= size && H[r] > H[maxIndex]) {
        maxIndex = r;
    }
 
    // If i not same as maxIndex
    if (i != maxIndex) {
        swap(i, maxIndex);
        shiftDown(maxIndex);
    }
}
 
// Function to insert a new element in the Binary Heap
function insert(p){
    size = size + 1;
    H[size] = p;
 
    // Shift Up to maintain heap property
    shiftUp(size);
}
 
// Function to extract the element with maximum priority
function extractMax(){
    var result = H[0];
 
    // Replace the value at the root with the last leaf
    H[0] = H[size];
    size = size - 1;
 
    // Shift down the replaced element to maintain the heap property
    shiftDown(0);
    return result;
}
 
// Function to change the priority of an element
function changePriority(i, p){
    var oldp = H[i];
    H[i] = p;
 
    if (p > oldp) {
        shiftUp(i);
    }
    else {
        shiftDown(i);
    }
}
 
// Function to get value of the current maximum element
function getMax(){
    return H[0];
}
 
// Function to remove the element located at given index
function remove(i)
{
    H[i] = getMax() + 1;
 
    // Shift the node to the root
    // of the heap
    shiftUp(i);
 
    // Extract the node
    extractMax();
}
 
Time Complexity: The time complexity of all the operations is O(logn) except for GetMax() which has time complexity of O(1). 
Auxiliary Space: O(N)
