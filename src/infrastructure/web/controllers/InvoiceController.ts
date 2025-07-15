import { Request, Response } from 'express';
import { GetAllInvoices } from '../../../application/usecases/invoice/GetAllInvoices';

export class InvoiceController {
    constructor(private getAllInvoices: GetAllInvoices) {}

    async getAll(req: Request, res: Response) {
        const invoices = await this.getAllInvoices.execute();
        res.json(invoices);
    }
}
