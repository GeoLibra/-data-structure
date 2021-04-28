import LinkedList from "./SinglyLinkedList";

describe("linkedlist", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
  });

  it("insert element to linkedlist", () => {
    expect(list.append(0)).toBeTruthy;
  });

  it("check linklist is circle", () => {
    expect(list.checkCircle()).toBeFalsy;
  });

  it("find the middle node", () => {
    expect(list.findMiddleNode().element).toEqual(2);
    expect(list.findMiddleNode().element).toBe(2);
  });

});
