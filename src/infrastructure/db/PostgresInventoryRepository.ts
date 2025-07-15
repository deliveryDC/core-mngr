import { pool } from './db';
import { InventoryRepository } from '../../domain/repositories/InventoryRepository';
import { Inventory } from '../../domain/models/Inventory';

export class PostgresInventoryRepository implements InventoryRepository {    

    async getAll(): Promise<Inventory[]> {
        const result = await pool.query('SELECT * FROM inventory');
        return result.rows.map(row => new Inventory(
            row.id,
            row.id_product,
            parseFloat(row.purchase_price),
            row.quantity,
            row.facture_number,
            row.entry_date
        ));
    }
}
