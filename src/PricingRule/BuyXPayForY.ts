import Item from "../Item";
import IPricingRule from "./IPricingRule";

export default class BuyXPayForY implements IPricingRule {
  item: Item;
  quantityBought: number;
  quantityPaidFor: number;

  constructor(item: Item, quantityBought: number, quantityPaidFor: number) {
    this.item = item;
    this.quantityBought = quantityBought;
    this.quantityPaidFor = quantityPaidFor;
  }

  public apply(items: Item[]): number {
    const validItems = items.filter((item) => item.equals(this.item));
    const originalPrice = this.priceOfItems(validItems);
    const timesToApplyDiscount = Math.floor(
      validItems.length / this.quantityBought
    );
    const finalPrice =
      originalPrice -
      this.item.getValue() *
        timesToApplyDiscount *
        (this.quantityBought - this.quantityPaidFor);

    return originalPrice - finalPrice;
  }

  private priceOfItems(items: Item[]) {
    return items.reduce((a, b) => a + b.getValue(), 0);
  }
}
