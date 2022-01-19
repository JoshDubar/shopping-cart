import Item from "./Item";

export const totalPriceOfItems = (items: Item[]): number => {
  return items.reduce((a, b) => a + b.getValue(), 0);
};
