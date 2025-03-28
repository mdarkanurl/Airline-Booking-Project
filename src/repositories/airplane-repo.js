import CrudRepo from './crud-repo.js';
import Airplane from '../models/airplane.js';

class AirplaneRepo extends CrudRepo {
    constructor() {
        super(Airplane);
    }
}

export default AirplaneRepo;