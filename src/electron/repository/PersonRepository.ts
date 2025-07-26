import { DataSource } from "typeorm";
import Person from "../model/Person.js";
import AbstractRepository from "./AbstractRepository.js";

export default class PersonRepository extends AbstractRepository<Person, string> {
    constructor(dataSource: DataSource) {
        super(dataSource.getRepository(Person));
    }
};
