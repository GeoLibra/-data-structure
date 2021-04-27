import LinkedList from "./SinglyLinkedList";

describe("linkedlist", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it("is empty", () => {
    expect(list.isEmpty()).toBeTruthy();
    expect(list.size()).toBe(0);
  });
});
