//Recursively  O(n) time & O(n) space
function reverse(head) {
  if (!head || !head.next) return head;

  let temp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return temp;
}



//Iteratively  O(n) time & O(1) space
function reverse(head) {
  let node = head;
  let previous;
  let temp

  while (node) {
    // save next before we overwrite node.next
    temp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = temp;
  }

  return previous;
}
