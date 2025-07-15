export class Product {
    constructor(
        public id: number,
        public shop: string,
        public titleProduct: string,
        public category: string,
        public price: number,
        public size: string,
        public imageUrl: string
    ) {}
}
