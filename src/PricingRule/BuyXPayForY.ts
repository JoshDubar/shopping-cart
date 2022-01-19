import Item from "../Item";
import { totalPriceOfItems } from "../utils";
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
    const originalPrice = totalPriceOfItems(validItems);
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
}
