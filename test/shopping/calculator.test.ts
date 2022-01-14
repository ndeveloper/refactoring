import { priceOrder } from "../../src/shopping/calculator";
import { Product } from "../../src/shopping/product";
import { ShippingMethod } from "../../src/shopping/shippingMethod";

describe("test add function", () => {
  
    it("quantity less to threshold should not make discount", () => {
        // Arrange
        const product = new Product(10, 6);
        const shippingMethod = new ShippingMethod();
        const quantity = 4;

        // Act
        const price = priceOrder(product, quantity, shippingMethod);
        
        // Assert
        expect(price).toBe(40);
    });

    it("quantity grater than threshold should make discount only on 2 products", () => {
        // Arrange
        const product = new Product(10, 6);
        const shippingMethod = new ShippingMethod();
        const quantity = 8;
        
        // Act
        const price = priceOrder(product, quantity, shippingMethod);

        // Assert
        expect(price).toBe(78);
    });

})