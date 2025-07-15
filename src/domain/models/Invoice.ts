export class Invoice {
    constructor(
        public id: number,
        public idProduct: number,
        public idClient: number,
        public paymentMethod: string,
        public invoiceDate: Date,
        public status: string,
        public tax: number,
        public observations: string,
        public salesPrice: number,
        public sendPrice: number,
        public total: number
    ) {}
}
