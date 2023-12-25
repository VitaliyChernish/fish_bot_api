const { WoterTemp } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class WoterTempController {
    ////////////////////
    async getAllWoterTemp(req, res) {
        const woterTemp = await WoterTemp.findAll();
        return res.json(woterTemp);
    }

    async getOneWoterTemp(req, res, next) {
        const { city } = req.params; // Використовуйте req.params
        try {
            const woterTempData = await WoterTemp.findAll({
                attributes: [city, 'createdAt'] // Виберіть конкретне поле (місто)
            });

            res.json(woterTempData); // Отримані дані надсилаються назад як відповідь
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Помилка при отриманні даних з бази даних' }); // Обробка помилки
        }
    }
    

    async createWoterTemp(req, res, next) {
        try {
            const woterTempData = req.body;
            const woterTemp = await WoterTemp.create(woterTempData);
    
            res.json(woterTemp);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }    
}
module.exports = new WoterTempController();
