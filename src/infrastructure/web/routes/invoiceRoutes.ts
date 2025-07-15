import { Router } from 'express';
import { PostgresInvoiceRepository } from '../../db/PostgresInvoiceRepository';
import { GetAllInvoices } from '../../../application/usecases/invoice/GetAllInvoices';
import { InvoiceController } from '../controllers/InvoiceController';

const router = Router();
const invoiceRepo = new PostgresInvoiceRepository();
const getAllInvoices = new GetAllInvoices(invoiceRepo);
const invoiceController = new InvoiceController(getAllInvoices);

router.get('/invoices', invoiceController.getAll.bind(invoiceController));

export default router;