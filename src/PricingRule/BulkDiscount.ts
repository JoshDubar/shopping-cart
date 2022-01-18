import Item from "../Item";
import IPricingRule from "./IPricingRule";

export default class BulkDiscount implements IPricingRule {
  private item: Item;
  private quantity: number;
  private newPrice: number;

  constructor(item: Item, quantity: number, newPrice: number) {
    this.item = item;
    this.quantity = quantity;
    this.newPrice = newPrice;
  }

  public apply(items: Item[]): number {
    const validItems = items.filter((item) => item.equals(this.item));
    if (validItems.length < this.quantity) return 0;

    return (this.item.getValue() - this.newPrice) * validItems.length;
  }
}
