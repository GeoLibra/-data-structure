/**
 * 循环队列
 *
 * @class CircularQueue
 */
export default class CircularQueue {
  constructor(k) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    // 队列长度
    this.count = k;
  }

  enqueue(value) {
    if (this.isFull()) {
      return false;
    } else {
      this.queue[this.rear] = value;
      // 尾指针循环
      this.rear = (this.rear + 1) % this.count;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    } else {
      const value = this.queue[this.front];
      this.queue[this.front] = 0;
      this.front = (this.front + 1) % this.count;
      return value;
    }
  }

  getFront() {
    if(this.isEmpty()){
      return false;
    }else{
      return this.queue[this.front];
    }
  }

  getRear(){
    if(this.isEmpty()){
      return false;
    } else {
      let rear = this.rear - 1
      return this.queue[rear < 0 ? this.count - 1 : rear]
    }
  }

  isFull() {
    return this.front === this.rear && !!this.queue[this.front];
  }

  isEmpty() {
    return this.front === this.rear && !this.queue[this.front];
  }
}
