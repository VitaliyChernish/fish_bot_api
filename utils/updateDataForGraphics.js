const axios = require('axios');
const cheerio = require('cheerio');

const createDataForGraphics = async (dataLinks, controller, func) => {
    try {
        const pressureData = {};

        for (const key in dataLinks) {
            const pres = await new Promise((resolve) => {
                try {
                    let dat = func(dataLinks[key])
                    resolve(dat);
                } catch (e) {
                    console.error('myAxiosTemp:', e);
                    resolve(null);
                }
            });

            if (pres !== null) {
                pressureData[key] = pres;
            }
        }

        const req = { body: pressureData };
        const res = {
            json: (data) => {
                data // Виведе дані, які були передані у res.json()
            }
        };

        const next = (error) => {
            if (error) {
                console.error(error); // Обробка помилки, якщо вона виникла
            }
        };

        await controller(req, res, next);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createDataForGraphics
}
