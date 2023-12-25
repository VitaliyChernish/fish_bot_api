const { Pressure } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class PressureController {
    ////////////////////
    async getAllPressure(req, res) {
        const pressure = await Pressure.findAll();
        return res.json(pressure);
    }

    async getOnePressure(req, res, next) {
        const { city } = req.params; // Використовуйте req.params
        try {
            const pressureData = await Pressure.findAll({
                attributes: [city, 'createdAt'] // Виберіть конкретне поле (місто)
            });

            res.json(pressureData); // Отримані дані надсилаються назад як відповідь
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Помилка при отриманні даних з бази даних' }); // Обробка помилки
        }
    }
    
    async createPressure(req, res, next) {
        try {
            const pressureData = req.body;
            const pressure = await Pressure.create(pressureData);
            
            res.json(pressure);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}
module.exports = new PressureController();


