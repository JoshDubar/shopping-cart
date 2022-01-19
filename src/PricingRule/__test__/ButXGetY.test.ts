import Item from "../../Item";
import BuyXGetY from "../BuyXGetY";

const purchasedItem = new Item("abc", "def", 10);
const bonusItem = new Item("xyz", "mno", 8);

describe("BuyXGetY", () => {
  let rule: BuyXGetY;
  beforeEach(() => {
    rule = new BuyXGetY(purchasedItem, 2, bonusItem, 1);
  });

  describe("apply", () => {
    it("condition is not matched and no discount is given", () => {
      expect(rule.apply([purchasedItem, bonusItem])).toBe(0);
    });

    it("condition is matched and bonus item's price is discounted", () => {
      expect(rule.apply([purchasedItem, purchasedItem, bonusItem])).toBe(8);
    });
  });
});
