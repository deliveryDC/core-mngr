import { pool } from './db';
import { ClientRepository } from '../../domain/repositories/ClientRepository';
import { Client } from '../../domain/models/Client';

export class PostgresClientRepository implements ClientRepository {
    async getAll(): Promise<Client[]> {
        const result = await pool.query('SELECT * FROM client');
        return result.rows.map(row => new Client(
            row.id,
            row.name,
            row.document_type,
            row.document_number,
            row.phone,
            row.address,
            row.municipality,
            row.city,
            row.sales_quantity
        ));
    }
}
