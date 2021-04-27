import LinkedList from "./SinglyLinkedList";

describe("linkedlist", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it("insert element to linkedlist", () => {
    expect(list.append(0)).toBeTruthy;
  });
});
