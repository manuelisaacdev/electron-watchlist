import { FindManyOptions, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";

export default class AbstractRepository<T extends ObjectLiteral, ID extends string | number> {
    protected repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async findAll(options?: FindManyOptions<T>): Promise<T[]> {
        return await this.repository.find(options);
    }

    async findById(findOptionsWhere: FindOptionsWhere<T>): Promise<T | null> {
        return await this.repository.findOneBy(findOptionsWhere);
    }

    async save(entity: T): Promise<T> {
        return await this.repository.save(entity);
    }

    async deleteById(id: ID): Promise<void> {
        await this.repository.delete(id);
    }
    
};
