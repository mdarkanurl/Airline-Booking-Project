const CrudRepo = require('./crud-repo.js');
const Airplane = require('../models');

class AirplaneRepo extends CrudRepo {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepo;