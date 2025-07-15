import { Request, Response } from 'express';
import { GetAllProducts } from '../../../application/usecases/product/GetAllProducts';

export class ProductController {
    constructor(private getAllProducts: GetAllProducts) {}

    async getAll(req: Request, res: Response) {
        const products = await this.getAllProducts.execute();
        res.json(products);
    }
}
