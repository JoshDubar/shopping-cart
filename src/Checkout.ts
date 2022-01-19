import Item from "./Item";
import IPricingRule from "./PricingRule/IPricingRule";
import { totalPriceOfItems } from "./utils";

export default class Checkout {
  private pricingRules: IPricingRule[];
  private items: Item[];

  constructor(pricingRules: IPricingRule[]) {
    this.pricingRules = pricingRules;
    this.items = [];
  }

  public scan(item: Item): void {
    this.items.push(item);
  }

  public total(): number {
    const discount = this.applyPricingRules();
    return totalPriceOfItems(this.items) - discount;
  }

  private applyPricingRules(): number {
    return this.pricingRules.reduce(
      (value, rule) => value + rule.apply(this.items),
      0
    );
  }
}
