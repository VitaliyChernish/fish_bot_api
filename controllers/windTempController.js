const { WindTemp } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class WindTempController {
    ////////////////////
    async getAllWindTemp(req, res) {
        const windTemp = await WindTemp.findAll();
        return res.json(windTemp);
    }

    async getOneWindTemp(req, res, next) {
        const { city } = req.params; // Використовуйте req.params
        try {
            const windTempData = await WindTemp.findAll({
                attributes: [city, 'createdAt'] // Виберіть конкретне поле (місто)
            });

            res.json(windTempData); // Отримані дані надсилаються назад як відповідь
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Помилка при отриманні даних з бази даних' }); // Обробка помилки
        }
    }

    async createWindTemp(req, res, next) {
        try {
            const windTempData = req.body;
            const windTemp = await WindTemp.create(windTempData);
    
            res.json(windTemp);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }    
}
module.exports = new WindTempController();


