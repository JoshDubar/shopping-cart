export default class Item {
  private sku: string;
  private name: string;
  private value: number;

  constructor(sku: string, name: string, value: number) {
    this.sku = sku;
    this.name = name;
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public equals(other: Item): boolean {
    return other.sku === this.sku;
  }
}
