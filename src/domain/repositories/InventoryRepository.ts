import { Inventory } from '../models/Inventory';

export interface InventoryRepository {
    getAll(): Promise<Inventory[]>;
    // Otros métodos: save, update, delete...
}
