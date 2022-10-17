const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  constructor() {
    this.first = null
    this.last = null
    this.length = 0   
  }
  
  isEmpty() {
    return this.first == null;
  }

  getUnderlyingList() {
    return this.first
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this ;
  }

  dequeue() {

    if (this.isEmpty()) return null;

    const itemToDel = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return itemToDel;
  }
}
//  class Queue {
//   constructor() {
//     this.elements = {};
//     this.head = 0;
//     this.tail = 0;
//   }
//   getUnderlyingList(){
//     return this.elements[this.tail]
//   }
//   enqueue(element) {
//     this.elements[this.tail] = element;
//     this.tail++;
//   }
//   dequeue() {
//     const item = this.elements[this.head];
//     delete this.elements[this.head];
//     this.head++;
//     return item;
//   }
//   peek() {
//     return this.elements[this.head];
//   }
// }


module.exports = {
  Queue
};
