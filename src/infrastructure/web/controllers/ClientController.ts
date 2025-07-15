import { Request, Response } from 'express';
import { GetAllClients } from '../../../application/usecases/client/GetAllClients';

export class ClientController {
    constructor(private getAllClients: GetAllClients) {}

    async getAll(req: Request, res: Response) {
        const clients = await this.getAllClients.execute();
        res.json(clients);
    }
}
