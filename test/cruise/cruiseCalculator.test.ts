import { calculatePlanPrice } from "../../src/cruise/cruiseCalculator";
import { Plan } from "../../src/cruise/plan";

describe("calculatePlanPrice test", () => {
  
    it("out of summer dates applies regular rate", () => {
        // Arrange
        const summerStart: Date = new Date(2022, 6, 20);
        const summerEnd: Date = new Date(2022, 9, 22);
        const product = new Plan(summerStart, summerEnd, 250, 320);
        const travelDate: Date = new Date(2022, 5, 22);
        const quantity = 2;

        // Act
        const planPrice = calculatePlanPrice(travelDate, product, quantity);
        
        // Assert
        expect(planPrice).toBe(505);
    });

    it("between summer dates applies summer rate", () => {
        // Arrange
        const summerStart: Date = new Date(2022, 6, 20);
        const summerEnd: Date = new Date(2022, 9, 22);
        const product = new Plan(summerStart, summerEnd, 250, 320);
        const travelDate: Date = new Date(2022, 8, 22);
        const quantity = 2;

        // Act
        const planPrice = calculatePlanPrice(travelDate, product, quantity);
        
        // Assert
        expect(planPrice).toBe(640);
    });


})