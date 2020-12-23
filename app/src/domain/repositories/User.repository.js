const BaseRepository = require('./BaseRepository');
class User extends BaseRepository {
    constructor(model) {
        super(model)
    }
}

module.exports = User;