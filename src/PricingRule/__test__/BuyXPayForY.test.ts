import Item from "../../Item";
import BuyXPayForY from "../BuyXPayForY";

const item = new Item("abc", "def", 10);

describe("BuyXGetY", () => {
  let rule: BuyXPayForY;
  beforeEach(() => {
    rule = new BuyXPayForY(item, 3, 2);
  });

  describe("apply", () => {
    it("discount is applied with exactly X items", () => {
      expect(rule.apply([item, item, item])).toBe(10);
    });

    describe("discount is applied with more than X items", () => {
      it("but less than 2X items", () => {
        expect(rule.apply([item, item, item, item])).toBe(10);
      });

      it("with greater or equal than 2X items", () => {
        expect(rule.apply([item, item, item, item, item, item, item])).toBe(20);
      });
    });
  });
});
