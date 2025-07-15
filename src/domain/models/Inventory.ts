export class Inventory {
    constructor(
        public id: number,
        public idProduct: number,
        public purchasePrice: number,
        public quantity: number,
        public factureNumber?: string,
        public entryDate?: Date
    ) {}
}
