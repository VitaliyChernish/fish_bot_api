// const { watherTemp } = require('./arreys')
const { createRegions } = require('../controllers/regionsController')

const createDefaultRegions = async (watherTemp) => {
    for (key in watherTemp) {
        const req = {
            body: {
                name: key
            }
        }
        const res = {
            json: (data) => {
                console.log(data); // Виведе дані, які були передані у res.json()
            }
        }
        const next = (error) => {
            if (error) {
                console.error(error); // Обробка помилки, якщо вона виникла
            }
        };
        createRegions(req, res, next)
    }
}

module.exports = {
    createDefaultRegions
}