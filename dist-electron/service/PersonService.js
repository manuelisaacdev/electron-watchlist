import { ipcMain } from 'electron';
import AbstractService from './AbstractService.js';
import PersonRepository from '../repository/PersonRepository.js';
export default class PersonService extends AbstractService {
    constructor(dataSource) {
        super(new PersonRepository(dataSource));
    }
    setupIPC() {
        ipcMain.handle("persons-find-all", async () => await this.findAll());
        return this;
    }
}
;
