import { InventoryRepository } from '../../../domain/repositories/InventoryRepository';

export class GetAllInventory {
    constructor(private inventoryRepo: InventoryRepository) {}

    async execute() {
        return this.inventoryRepo.getAll();
    }
}
