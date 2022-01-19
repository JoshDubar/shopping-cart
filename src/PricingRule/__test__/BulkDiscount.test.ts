import Item from "../../Item";
import BulkDiscount from "../BulkDiscount";

const item = new Item("abc", "def", 10);

describe("BulkDiscount", () => {
  let rule: BulkDiscount;
  beforeEach(() => {
    rule = new BulkDiscount(item, 2, 5);
  });

  describe("apply", () => {
    it("not enough matching items for discount to be applied", () => {
      expect(rule.apply([item, new Item("xyz", "mno", 2)])).toBe(0);
    });

    it("discount is applied", () => {
      expect(rule.apply([item, item, item])).toBe(15);
    });
  });
});
