const { createDefaultRegions } = require('./utils/createCitiesData')
const { updateRegionsData } = require('./utils/updateRegionsData')
const { createDataForGraphics } = require('./utils/updateDataForGraphics')
const { woterTemp, weatherNow } = require('./utils/arreys')
const { createPressure } = require('./controllers/pressureController');
const { createWindTemp } = require('./controllers/windTempController');
const { createWoterTemp } = require('./controllers/woterTempController');
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment-timezone');

const woterTempFromLink = async (link) => {
    try {
        let resData = '';
        const html = await axios.get(link);
        const $ = cheerio.load(html.data);
        $('#temp1').each((i, elem) => {
            resData += $(elem).text().match(/\d+\.\d/);
        });
        return +resData;
    } catch (e) {
        console.error('myAxiosTemp:', e);
        return null;
    }
}

const windTempFromLink = async (link) => {
    try {
        let resData = ''
        const html = await axios.get(link);
        const $ = cheerio.load(html.data)
        $(`[dir="ltr"]`).each((i, elem) => {
            resData += $(elem).text()
        })
        return resData; 
    } catch (e) {
        console.error('myAxiosTemp:', e);
        return null;
    }
}

const pressureFromLink = async (link) => {
    try {
        let resData = ''
        let resDataArr = [];
        const html = await axios.get(link);
        const $ = cheerio.load(html.data)
        $(`td`).each((i, elem) => {
            resDataArr.push($(elem).text()) //отримуємо масив даних у форматі: [ '50 %', '4 м/с', '747 ', '0/12', '82 %', '0,02 мм' ]
            resData = resDataArr[2] //'747 '
        })
        return +resData; //747
    } catch (e) {
        console.error('myAxiosTemp:', e);
        return null;
    }
}

const logicDriveFunc = async () => {
    try {
        // await createDefaultRegions(woterTemp)
        // await createDataForGraphics(woterTemp, createWoterTemp, woterTempFromLink)
        // await createDataForGraphics(weatherNow, createWindTemp, windTempFromLink)
        // await createDataForGraphics(weatherNow, createPressure, pressureFromLink)
        
        
        // updateRegionsData(weatherNow)


        setInterval(() => {
            updateRegionsData(weatherNow)
        }, 7200000);
        
        setInterval(() => {
            createDataForGraphics(woterTemp, createWoterTemp, woterTempFromLink)
        }, 7200000);
        
        setInterval(() => {
            createDataForGraphics(weatherNow, createWindTemp, windTempFromLink)
        }, 7200000);
        
        setInterval(() => {
            createDataForGraphics(weatherNow, createPressure, pressureFromLink)
        }, 7200000);
    } catch (e) {
        console.error('Помилка зборщика функцій' + e)
    }
}

module.exports = { logicDriveFunc }