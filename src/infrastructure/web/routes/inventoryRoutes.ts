import { Router } from 'express';
import { PostgresInventoryRepository } from '../../db/PostgresInventoryRepository';
import { GetAllInventory } from '../../../application/usecases/inventory/GetAllInventory';
import { InventoryController } from '../controllers/InventoryController';

const router = Router();
const inventoryRepo = new PostgresInventoryRepository();
const getAllInventory = new GetAllInventory(inventoryRepo);
const inventoryController = new InventoryController(getAllInventory);

router.get('/inventory', inventoryController.getAll.bind(inventoryController));

export default router;
