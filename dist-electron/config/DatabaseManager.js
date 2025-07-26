import path from 'path';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import Person from '../model/Person.js';
class DatabaseManager {
    constructor() {
        this.dataSource = new DataSource({
            type: "better-sqlite3",
            database: DatabaseManager.FILENAME,
            synchronize: true,
            logging: true,
            entities: [Person],
            subscribers: [],
            migrations: [],
        });
    }
    getDataSource() {
        return this.dataSource;
    }
    async initializeDatabase() {
        await this.dataSource.initialize();
    }
}
DatabaseManager.FILENAME = path.join(app.getPath("home"), 'app.db');
export default DatabaseManager;
