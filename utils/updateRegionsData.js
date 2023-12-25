const { updateRegions } = require('../controllers/regionsController')
const axios = require('axios');
const cheerio = require('cheerio');

const updateRegionsData = async (arr) => {
    for (key in arr) {
        
        const pres = await new Promise((resolve) => {
            let resDataArr = []
            console.log(arr[key]);
            try {
                axios.get(arr[key]).then(html => {
                    const $ = cheerio.load(html.data)
                    
                    $(`td`).each((i, elem) => {
                        resDataArr.push($(elem).text()) //отримуємо масив даних у форматі: [ '50 %', '4 м/с', '747 ', '0/12', '82 %', '0,02 мм' ]                
                    })
                    $(`h3`).each((i, elem) => {
                        resDataArr.push($(elem).text())
                    })
                    $(`[dir="ltr"]`).each((i, elem) => {
                        resDataArr.push($(elem).text())
                    })
                    resolve(resDataArr);
                })
            } catch (e) {
                console.error('myAxiosTemp:', e)
            }
        });
        const req = await {
            body: {
                name: key,
                pressure: pres[2],  // тиск
                temperature: pres[1], // швидкість вітру
                fetchLink: pres[0], // шмовірність опадів
                presipitation: pres[6], //небо. на приклад: "Похмуро, без опадів"
                image: pres[pres.length - 1]
            }
        }
        const res = await {
            json: (data) => {
                console.log(data); // Виведе дані, які були передані у res.json()
            }
        }
        const next = (error) => {
            if (error) {
                console.error(error); // Обробка помилки, якщо вона виникла
            }
        };
        await updateRegions(req, res, next)
    }
}

module.exports = {
    updateRegionsData
}
