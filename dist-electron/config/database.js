import { DataSource } from "typeorm";
import Person from "../model/Person.js";
export const dataSource = new DataSource({
    type: "better-sqlite3",
    database: "app.db",
    synchronize: true,
    logging: true,
    entities: [Person],
    subscribers: [],
    migrations: [],
});
