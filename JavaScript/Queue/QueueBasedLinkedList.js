/**
 * 基于链表实现队列
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class QueueBasedLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head !== null) {
      const value = this.head.element
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return value;
    } else {
      return -1;
    }
  }

  toString(){
    let node = this.head;
    const result = [];
    while(node){
      result.push(node.element);
      node = node.next
    }
    return result.toString();
  }
}
