import path from 'path';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import Person from '../model/Person.js';

export default class DatabaseManager {
    private dataSource: DataSource;
    private static FILENAME = path.join(app.getPath("home"), 'app.db');

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
    
    getDataSource(): DataSource {
        return this.dataSource;
    }

    async initializeDatabase(): Promise<void> {
        await this.dataSource.initialize();
    }
}