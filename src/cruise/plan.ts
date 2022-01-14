export class Plan {
    summerStart: Date;
    summerEnd: Date;
    summerRate: number;
    regularRate: number;
    regularServiceCharge: number = 5;
    constructor(summerStart: Date, summerEnd: Date, regularRate: number, summerRate: number) {
        this.summerStart = summerStart;
        this.summerEnd = summerEnd;
        this.regularRate = regularRate;
        this.summerRate = summerRate;
    }
}
