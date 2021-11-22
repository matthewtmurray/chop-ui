export class OrderItem{
    itemName: string;
    amount: number;

    constructor(itemName: string, amount: number){
        this.amount = amount;
        this.itemName = itemName;
    }
}