export class Client {
    constructor(
        public id: number,
        public name: string,
        public documentType: string,
        public documentNumber: string,
        public phone?: string,
        public address?: string,
        public municipality?: string,
        public city?: string,
        public salesQuantity?: number
    ) {}
}
