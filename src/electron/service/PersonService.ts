import { ipcMain } from 'electron';
import { DataSource } from 'typeorm';
import Person from '../model/Person.js';
import AbstractService from './AbstractService.js';
import PersonRepository from '../repository/PersonRepository.js';

export default class PersonService extends AbstractService<Person, string, PersonRepository>  {
    
    constructor(dataSource: DataSource) {
        super(new PersonRepository(dataSource));
    }
    
    setupIPC(): PersonService {
        ipcMain.handle("persons-find-all", async (): Promise<Person[]> => await this.findAll());
        return this;
    }

};
