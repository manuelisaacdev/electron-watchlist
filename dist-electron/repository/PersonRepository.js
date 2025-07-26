import Person from "../model/Person.js";
import AbstractRepository from "./AbstractRepository.js";
export default class PersonRepository extends AbstractRepository {
    constructor(dataSource) {
        super(dataSource.getRepository(Person));
    }
}
;
