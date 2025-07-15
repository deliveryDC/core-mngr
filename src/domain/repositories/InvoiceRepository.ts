import { Invoice } from '../models/Invoice';

export interface InvoiceRepository {
    getAll(): Promise<Invoice[]>;
    // Otros métodos: save, update, delete...
}
