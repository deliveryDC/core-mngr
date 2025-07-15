import { pool } from './db';
import { InvoiceRepository } from '../../domain/repositories/InvoiceRepository';
import { Invoice } from '../../domain/models/Invoice';

export class PostgresInvoiceRepository implements InvoiceRepository {
    async getAll(): Promise<Invoice[]> {
        const result = await pool.query('SELECT * FROM invoice');
        return result.rows.map(row => new Invoice(
            row.id,
            row.id_product,
            row.id_client,
            row.payment_method,
            row.invoice_date,
            row.status,
            parseFloat(row.tax),
            row.observations,
            parseFloat(row.sales_price),
            parseFloat(row.send_price),
            parseFloat(row.total)
        ));
    }
}
