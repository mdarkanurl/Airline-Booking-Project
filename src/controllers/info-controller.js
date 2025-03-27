import { StatusCodes } from 'http-status-codes';

const info = (req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: true,
        message: 'API is live',
        error: {},
        data: {}
    });
}

export default info