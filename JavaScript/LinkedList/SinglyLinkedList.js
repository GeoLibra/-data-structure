class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = new Node("head");
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
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insert(newEle, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log("未找到插入位置");
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
      console.log("未找到");
      return;
    }
    preNode.next = preNode.next.next;
  }

  // 遍历显示所有节点
  display() {
    let currentNode = this.head.next;
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  // 尾插法 反转链表
  reverseList() {
    const root = new Node("head");
    let currentNode = this.head.next;
    while (currentNode !== null) {
      const next = currentNode.next;
      currentNode.next = root.next;
      root.next = currentNode;
      currentNode = next;
    }
    this.head = root;
  }

  reverseList2() {
    // head节点即哨兵,作用是使所有链表包括空链表的头节点不为null,并使对单链表的插入、删除操作不需要区分是否为空或是否在第一个位置
    // 从而与其他位置的插入、删除操作一致
    // 所以反转链表的时候不需要带上head节点
    let currentNode = this.head.next;
    // 第一个节点头节点让其指向null
    let previousNode = null;
    while (currentNode !== null) {
      // 先保留下一个节点的指针
      let nextNode = currentNode.next;
      // 第一次是null
      currentNode.next = previousNode;
      // 此时将previousNode赋值为当前节点
      // 那么下次循环的时候 方便下次的currentNode指向previousNode
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // 最后將反转好的链表加上头节点
    this.head.next = previousNode;
  }

  // 环验证
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  // 找到中间节点
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(k) {
    // 先判断是否是循环链表
    if (this.checkCircle()) return false;
    let pos = 1;
    this.reverseList();
    let currentNode = this.head.next;
    while (currentNode !== null && pos < k) {
      currentNode = currentNode.next;
      pos++;
    }
    if(currentNode === null){
      console.log('无法删除最后一个节点或该节点不存在')
      return false;
    }
    this.remove(currentNode.element);
    this.reverseList();
  }
}

const list = new LinkedList();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    console.log(list.findMiddleNode())