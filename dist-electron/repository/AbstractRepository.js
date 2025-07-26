export default class AbstractRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(options) {
        return await this.repository.find(options);
    }
    async findById(findOptionsWhere) {
        return await this.repository.findOneBy(findOptionsWhere);
    }
    async save(entity) {
        return await this.repository.save(entity);
    }
    async deleteById(id) {
        await this.repository.delete(id);
    }
}
;
