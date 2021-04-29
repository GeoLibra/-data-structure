import QueueBasedLinkedList from "./QueueBasedLinkedList";

describe("QueueBasedLinkedList", () => {
  let queue;
  beforeEach(() => {
    queue = new QueueBasedLinkedList();
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
  });

  it('toString',()=>{
    expect(queue.toString()).toBe("0,1,2");
  })

  it('should equal a number', () => {
    expect(queue.dequeue()).toEqual(0);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  })

  it('should equal -1', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toEqual(-1);
    expect(queue.head).toEqual(null);
    expect(queue.tail).toEqual(null);
  })

});
