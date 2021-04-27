class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  append(newEle) {
    const newNode = new Node(newEle);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode;
  }

  insert(newEle, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log('未找到插入位置');
      return;
    }
    const newNode = new Node(newEle);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode.next ? -1 : currentNode;
  }

  remove(item) {
    let preNode = this.findPrev(item);
    if (preNode === -1) {
      console.log('未找到');
      return;
    }
    preNode.next = preNode.next.next;
  }

  // 遍历显示所有节点
  display() {
    let currentNode = this.head.next;
    while (currentNode) {
      console.log(currentNode.element)
      currentNode = currentNode.next;
    }
  }
}
