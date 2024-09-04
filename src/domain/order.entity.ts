export  class order {    
    id: number;
    productId: string;
    amount : number;

    constructor(id: number, productId: string, amount: number) {
        this.id = id;
        this.productId = productId;
        this.amount = amount;
    }
}