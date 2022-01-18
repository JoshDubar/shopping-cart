import BulkDiscount from "./PricingRule/BulkDiscount";
import BuyXGetY from "./PricingRule/BuyXGetY";
import Checkout from "./Checkout";
import Item from "./Item";
import IPricingRule from "./PricingRule/IPricingRule";
import BuyXPayForY from "./PricingRule/BuyXPayForY";

const ipd = new Item("ipd", "Super iPad", 549.99);
const mbp = new Item("mbp", "MacBook Pro", 1399.99);
const atv = new Item("atv", "Apple TV", 109.5);
const vga = new Item("vga", "VGA adapter", 30);

const atvBuy3Get2 = new BuyXPayForY(atv, 3, 2);
const ipdMoreThan4BulkDiscount = new BulkDiscount(ipd, 5, 499.99);
const freeVgaWithMbp = new BuyXGetY(mbp, 1, vga, 1);
const pricingRules: IPricingRule[] = [
  atvBuy3Get2,
  ipdMoreThan4BulkDiscount,
  freeVgaWithMbp,
];

// First scenario
const checkout1 = new Checkout(pricingRules);
checkout1.scan(atv);
checkout1.scan(atv);
checkout1.scan(atv);
checkout1.scan(vga);
console.log(checkout1.total());

// Second scenario
const checkout2 = new Checkout(pricingRules);
checkout2.scan(atv);
checkout2.scan(ipd);
checkout2.scan(ipd);
checkout2.scan(atv);
checkout2.scan(ipd);
checkout2.scan(ipd);
checkout2.scan(ipd);
console.log(checkout2.total());

// Third scenario
const checkout3 = new Checkout(pricingRules);
checkout3.scan(mbp);
checkout3.scan(vga);
checkout3.scan(ipd);
console.log(checkout3.total());
