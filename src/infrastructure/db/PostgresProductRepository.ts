import { pool } from './db';
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { Product } from '../../domain/models/Product';

export class PostgresProductRepository implements ProductRepository {
    async getAll(): Promise<Product[]> {
        const result = await pool.query('SELECT * FROM product');
        return result.rows.map(row => new Product(
            row.id,
            row.shop,
            row.title_product,
            row.category,
            parseFloat(row.price),
            row.size,
            row.image_url
        ));
    }
}
