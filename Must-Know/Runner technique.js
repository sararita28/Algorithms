/*
The runner technique means that you iterate through the linked list with two pointers simultaneously, with one ahead of the other. The fast
node might be ahead by a fixed amount, or it might be hopping multiple nodes for each one node that the slow node iterates through.
Below is an example of the implementation of the runner technique on a linked list. Its purpose is to remove the nth node from the end of a list.
*/

var removeNthFromEnd = function(head, n) {
    let temp = new ListNode(0, head)
    let slow = temp
    let fast = head
    
    while (n--) fast = fast.next
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return temp.next
};
