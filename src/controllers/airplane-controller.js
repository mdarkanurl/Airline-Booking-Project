import { AirplaneService } from '../services/index.js';
import { StatusCodes } from 'http-status-codes';

const createAirplane = async (req, res) => {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create an airplane',
                    data: airplane,
                    error: {}
                });
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airplane',
                    data: {},
                    error: error.message
                });
    }
}

export default { createAirplane }