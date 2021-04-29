class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class StackBasedLinkedList {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) {
      return -1;
    }
    const value = this.top.element;
    this.top = this.top.next;
    return value;
  }

  toArray() {
    const nodes = [];
    if (this.top !== null) {
      let temp = this.top
      while (temp !== null) {
        nodes.push(temp)
        temp = temp.next
      }
    }
    return nodes;
  }

  toString() {
    return this.toArray().map((node) => node.element).toString();
  }
}
