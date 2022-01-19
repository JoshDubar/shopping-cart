import Item from "../Item";
import { totalPriceOfItems } from "../utils";

describe("utils", () => {
  describe("totalPriceOfItems", () => {
    it("correctly sum price of all items", () => {
      expect(
        totalPriceOfItems([
          new Item("", "", 10),
          new Item("", "", 3),
          new Item("", "", 5),
        ])
      ).toBe(18);
    });
  });
});
