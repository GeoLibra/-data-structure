import CircularQueue from './CircularQueue';
describe("CircularQueue", () => {
  let queue;
  beforeEach(() => {
    queue = new CircularQueue(5);
  });

  it('should be empty', () => {
    expect(queue.isEmpty()).toBeTruthy;
  })

  it('should be full', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.isFull()).toBeFalsy;
    queue.enqueue(5);
    expect(queue.isFull()).toBeTruthy;
    expect(queue.enqueue(6)).toBeFalsy;
  })

  it('should return 1', () => {
    expect(queue.dequeue()).toBeFalsy;
    expect(queue.getFront()).toBeFalsy;
    expect(queue.getRear()).toBeFalsy;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.getFront()).toEqual(1);
    expect(queue.getRear()).toEqual(5);

    expect(queue.dequeue()).toEqual(1);

    expect(queue.getFront()).toEqual(2);
    expect(queue.getRear()).toEqual(5);

    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.getRear()).toBeFalsy();
  })
});