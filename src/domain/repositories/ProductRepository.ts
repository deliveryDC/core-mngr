import { Product } from '../models/Product';

export interface ProductRepository {
    getAll(): Promise<Product[]>;
    // Otros métodos: save, update, delete...
}
