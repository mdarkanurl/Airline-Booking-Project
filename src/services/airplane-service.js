import { AirplaneRepo } from '../repositories/index.js';
const airplaneRepo = new AirplaneRepo();

const createAirplane = (data) => {
    try {
        const airplane = airplaneRepo.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

export { createAirplane };