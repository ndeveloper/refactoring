export class Product {
    basePrice: number = 0;
    discountThreshold: number = 6;
    discountRate: number = 0.1;
    constructor(basePrice: number, discountThreshold: number) {
        this.basePrice = basePrice;
        this.discountThreshold = discountThreshold;
    }
}
