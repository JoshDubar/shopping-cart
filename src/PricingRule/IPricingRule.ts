import Item from "../Item";

export default interface IPricingRule {
  apply(items: Item[]): number;
}
