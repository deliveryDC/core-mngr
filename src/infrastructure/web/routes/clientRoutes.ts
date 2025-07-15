import { Router } from 'express';
import { PostgresClientRepository } from '../../db/PostgresClientRepository';
import { GetAllClients } from '../../../application/usecases/client/GetAllClients';
import { ClientController } from '../controllers/ClientController';

const router = Router();
const clientRepo = new PostgresClientRepository();
const getAllClients = new GetAllClients(clientRepo);
const clientController = new ClientController(getAllClients);

router.get('/clients', clientController.getAll.bind(clientController));

export default router;
