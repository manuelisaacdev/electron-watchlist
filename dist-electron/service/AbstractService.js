export default class AbstractService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(options) {
        return await this.repository.findAll(options);
    }
    async findById(findOptionsWhere) {
        return await this.repository.findById(findOptionsWhere);
    }
    async save(entity) {
        return await this.repository.save(entity);
    }
    async deleteById(id) {
        await this.repository.deleteById(id);
    }
}
;
