import { ClientRepository } from '../../../domain/repositories/ClientRepository';

export class GetAllClients {
    constructor(private clientRepo: ClientRepository) {}

    async execute() {
        return this.clientRepo.getAll();
    }
}
