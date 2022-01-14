import { Plan } from "../cruise/plan";

export function calculatePlanPrice(aDate: Date, plan: Plan, quantity: number): number {
    let charge = 0;
    if (aDate >= plan.summerStart && aDate <= plan.summerEnd) {
        charge = quantity * plan.summerRate;
    }
    else {
        charge = quantity * plan.regularRate + plan.regularServiceCharge;
    }
    return charge;
}