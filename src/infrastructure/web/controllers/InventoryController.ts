import { Request, Response } from 'express';
import { GetAllInventory } from '../../../application/usecases/inventory/GetAllInventory';

export class InventoryController {
    constructor(private getAllInventory: GetAllInventory) {}

    async getAll(req: Request, res: Response) {
        const inventory = await this.getAllInventory.execute();
        res.json(inventory);
    }
}
