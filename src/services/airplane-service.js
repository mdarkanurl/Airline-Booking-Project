const { AirplaneRepo } = require('../repositories/index.js');
const airplaneRepo = new AirplaneRepo();

function createAirplane(data) {
    try {
        const airplane = new airplaneRepo.create(data)
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = createAirplane;