const BaseRepository = require('./BaseRepository');
 class Task extends BaseRepository{
    constructor(model) {
        super(model)
    }
}

module.exports = Task;