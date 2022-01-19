import Item from "../Item";

describe("Item", () => {
  let item: Item;
  beforeEach(() => {
    item = new Item("abc", "def", 100);
  });

  describe("equals", () => {
    it("items with the same sku are equal", () => {
      const abcItem = new Item("abc", "def", 100);
      expect(item.equals(abcItem)).toBe(true);
    });
    it("items without the same sku are not equal", () => {
      const otherItem = new Item("xyz", "mno", 5);
      expect(item.equals(otherItem)).toBe(false);
    });
  });
});
