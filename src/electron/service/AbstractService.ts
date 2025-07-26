import { FindManyOptions, FindOptionsWhere, ObjectLiteral } from "typeorm";
import AbstractRepository from "../repository/AbstractRepository.js";

export default abstract class AbstractService<T extends ObjectLiteral, ID extends string | number, R extends AbstractRepository<T, ID>> {
    protected repository: R;

    constructor(repository: R) {
        this.repository = repository;
    }

    async findAll(options?: FindManyOptions<T> | undefined): Promise<T[]> {
        return await this.repository.findAll(options);
    }

    async findById(findOptionsWhere: FindOptionsWhere<T>): Promise<T | null> {
        return await this.repository.findById(findOptionsWhere);
    }

    async save(entity: T): Promise<T> {
        return await this.repository.save(entity);
    }

    async deleteById<T>(id: ID): Promise<void> {
        await this.repository.deleteById(id);
    }

    abstract setupIPC(): AbstractService<T, ID, R>;
    
};
