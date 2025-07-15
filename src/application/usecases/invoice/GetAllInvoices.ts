import { InvoiceRepository } from '../../../domain/repositories/InvoiceRepository';

export class GetAllInvoices {
    constructor(private invoiceRepo: InvoiceRepository) {}

    async execute() {
        return this.invoiceRepo.getAll();
    }
}
