import { Client } from '../models/Client';

export interface ClientRepository {
    getAll(): Promise<Client[]>;
    // Otros métodos: save, update, delete...
}
