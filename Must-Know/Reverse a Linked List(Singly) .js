//Recursively  O(n) time & O(n) space
function reverse(head) {
  if (!head || !head.next) return head;

  let temp = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
}



//Iteratively  O(n) time & O(1) space
function reverse(head) {
  let node = head;
  let previous;
  let temp

  while (node) {
    // store node.next in a temp
    temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  return previous;
}
