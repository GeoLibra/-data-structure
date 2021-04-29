import Stack from "./Stack";

describe("Stack", () => {
  let stackTest;
  beforeEach(() => {
    stackTest = new Stack();
    stackTest.push(0);
    stackTest.push(1);
    stackTest.push(2);
  });

  it("pop stack", () => {
    expect(stackTest.pop()).toBe(2);
  });

  it("should convert to an array", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.toArray().join(",")).toBe("3,2,1");
  });

  it("should convert to string", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.toString()).toBe("3,2,1");
  });
});
