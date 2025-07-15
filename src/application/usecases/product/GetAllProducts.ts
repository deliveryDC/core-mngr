import { ProductRepository } from '../../../domain/repositories/ProductRepository';

export class GetAllProducts {
    constructor(private productRepo: ProductRepository) {}

    async execute() {
        return this.productRepo.getAll();
    }
}
