import Item from "../Item";
import IPricingRule from "./IPricingRule";

export default class BuyXGetY implements IPricingRule {
  purchased: Item;
  quantityPurchased: number;
  received: Item;
  quantityReceived: number;

  constructor(
    purchased: Item,
    quantityPurchased: number,
    received: Item,
    quantityReceived: number
  ) {
    this.purchased = purchased;
    this.quantityPurchased = quantityPurchased;
    this.received = received;
    this.quantityReceived = quantityReceived;
  }

  public apply(items: Item[]): number {
    const itemsBought = items.filter((item) => item.equals(this.purchased));
    const freeItems = items.filter((item) => item.equals(this.received));
    const itemsToReceiveForFree = this.itemsToReceiveCount(
      itemsBought.length,
      freeItems.length
    );

    return itemsToReceiveForFree * this.received.getValue();
  }

  // buy 3 get 2
  // [x,x,x,x,x,x]
  // 6 / 3 = 2 * 2
  // [y,y,y,y,y,y]
  private itemsToReceiveCount(
    numberItemsBought: number,
    numberItemsReceived: number
  ): number {
    return Math.min(
      Math.floor(numberItemsBought / this.quantityPurchased) *
        this.quantityReceived,
      numberItemsReceived
    );
  }
}
