import path from 'path';
import { app } from 'electron';
import { DataSource } from 'typeorm';

import Task from '../model/Task.js';
import Anime from '../model/Anime.js';
import Genre from '../model/Genre.js';
import Movie from '../model/Movie.js';
import Serie from '../model/Serie.js';
import Person from '../model/Person.js';
import Dorama from '../model/Dorama.js';
import Trailer from '../model/Trailer.js';
import ShareAnime from '../model/ShareAnime.js';
import ShareMovie from '../model/ShareMovie.js';
import ShareSerie from '../model/ShareSerie.js';
import ShareDorama from '../model/ShareDorama.js';
import PreferredMedia from '../model/PreferredMedia.js';

export default class DatabaseManager {
    private dataSource: DataSource;
    private static FILENAME = path.join(app.getPath("home"), 'watchlist.db');

    constructor() {
        this.dataSource = new DataSource({
            type: "better-sqlite3",
            database: DatabaseManager.FILENAME,
            logging: true,
            migrations: [],
            subscribers: [],
            synchronize: true,
            entities: [PreferredMedia, Person, Genre, Trailer, Anime, Movie, Serie, Dorama, ShareAnime, ShareMovie, ShareSerie, ShareDorama, Task],
        });
    }
    
    getDataSource(): DataSource {
        return this.dataSource;
    }

    async initializeDatabase(): Promise<void> {
        await this.dataSource.initialize();
    }
}