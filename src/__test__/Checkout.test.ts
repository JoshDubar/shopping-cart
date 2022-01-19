import Checkout from "../Checkout";
import Item from "../Item";
import BulkDiscount from "../PricingRule/BulkDiscount";

const item = new Item("abc", "def", 10);

describe("Checkout", () => {
  describe("total", () => {
    it("price is the same with no pricing rules", () => {
      const checkout = new Checkout([]);
      checkout.scan(item);
      expect(checkout.total()).toBe(10);
    });

    it("price is discounted according to pricing rules", () => {
      const checkout = new Checkout([new BulkDiscount(item, 3, 5)]);
      checkout.scan(item);
      checkout.scan(item);
      checkout.scan(item);
      expect(checkout.total()).toBe(15);
    });
  });
});
