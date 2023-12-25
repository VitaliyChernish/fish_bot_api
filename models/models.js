const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    nickName: { type: DataTypes.STRING, unique: true },
    company: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    instagramm: { type: DataTypes.STRING },
    telegramm: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "HR" },
    token: { type: DataTypes.STRING, allowNull: false },
    avatar: { type: DataTypes.STRING },
});

const ClientBase = sequelize.define('clientBase', {
    buttonPlace: { type: DataTypes.STRING },
    offerLink: { type: DataTypes.STRING },
    clientName: { type: DataTypes.STRING },
    clientPhone: { type: DataTypes.INTEGER },
    clientEmail: { type: DataTypes.STRING },
    clientTelegram: { type: DataTypes.STRING },
    clientOffer: { type: DataTypes.TEXT },
    offerConfirmation: { type: DataTypes.STRING },
    offerDetails: { type: DataTypes.TEXT },
    offerComments: {type: DataTypes.TEXT},
    date: { type: DataTypes.STRING }
})

const Regions = sequelize.define('regions', {
    name: { type: DataTypes.STRING, unique: true },
    pressure: { type: DataTypes.INTEGER },
    temperature: { type: DataTypes.INTEGER },
    presipitation: { type: DataTypes.STRING },
    fetchLink: { type: DataTypes.STRING },
    image: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT}
});

const Pressure = sequelize.define('pressure', {
    cherkaska: {type: DataTypes.INTEGER},
    chernihivska: {type: DataTypes.INTEGER},
    chernivecka: {type: DataTypes.INTEGER},
    dnipropetrovska: {type: DataTypes.INTEGER},
    donetska: {type: DataTypes.INTEGER},
    frankivska: {type: DataTypes.INTEGER},
    kharkivska: {type: DataTypes.INTEGER},
    khersonska: {type: DataTypes.INTEGER},
    khmelnitska: {type: DataTypes.INTEGER},
    kiivska: {type: DataTypes.INTEGER},
    kirovogradska: {type: DataTypes.INTEGER},
    luganskaya: {type: DataTypes.INTEGER},
    lvivska: {type: DataTypes.INTEGER},
    mykolaivskaya: {type: DataTypes.INTEGER},
    odeska: {type: DataTypes.INTEGER},
    poltavska: {type: DataTypes.INTEGER},
    rivnenska: {type: DataTypes.INTEGER},
    symska: {type: DataTypes.INTEGER},
    ternopilska: {type: DataTypes.INTEGER},
    vinnitska: {type: DataTypes.INTEGER},
    volunska: {type: DataTypes.INTEGER},
    zakarpatska: {type: DataTypes.INTEGER},
    zaporizka: {type: DataTypes.INTEGER},
    zhytomirska: {type: DataTypes.INTEGER},
})

const WoterTemp = sequelize.define('wotertemp', {
    cherkaska: {type: DataTypes.INTEGER},
    chernihivska: {type: DataTypes.INTEGER},
    chernivecka: {type: DataTypes.INTEGER},
    dnipropetrovska: {type: DataTypes.INTEGER},
    donetska: {type: DataTypes.INTEGER},
    frankivska: {type: DataTypes.INTEGER},
    kharkivska: {type: DataTypes.INTEGER},
    khersonska: {type: DataTypes.INTEGER},
    khmelnitska: {type: DataTypes.INTEGER},
    kiivska: {type: DataTypes.INTEGER},
    kirovogradska: {type: DataTypes.INTEGER},
    luganskaya: {type: DataTypes.INTEGER},
    lvivska: {type: DataTypes.INTEGER},
    mykolaivskaya: {type: DataTypes.INTEGER},
    odeska: {type: DataTypes.INTEGER},
    poltavska: {type: DataTypes.INTEGER},
    rivnenska: {type: DataTypes.INTEGER},
    symska: {type: DataTypes.INTEGER},
    ternopilska: {type: DataTypes.INTEGER},
    vinnitska: {type: DataTypes.INTEGER},
    volunska: {type: DataTypes.INTEGER},
    zakarpatska: {type: DataTypes.INTEGER},
    zaporizka: {type: DataTypes.INTEGER},
    zhytomirska: {type: DataTypes.INTEGER}
})

const WindTemp = sequelize.define('windtemp', {
    cherkaska: {type: DataTypes.STRING},
    chernihivska: {type: DataTypes.STRING},
    chernivecka: {type: DataTypes.STRING},
    dnipropetrovska: {type: DataTypes.STRING},
    donetska: {type: DataTypes.STRING},
    frankivska: {type: DataTypes.STRING},
    kharkivska: {type: DataTypes.STRING},
    khersonska: {type: DataTypes.STRING},
    khmelnitska: {type: DataTypes.STRING},
    kiivska: {type: DataTypes.STRING},
    kirovogradska: {type: DataTypes.STRING},
    luganskaya: {type: DataTypes.STRING},
    lvivska: {type: DataTypes.STRING},
    mykolaivskaya: {type: DataTypes.STRING},
    odeska: {type: DataTypes.STRING},
    poltavska: {type: DataTypes.STRING},
    rivnenska: {type: DataTypes.STRING},
    symska: {type: DataTypes.STRING},
    ternopilska: {type: DataTypes.STRING},
    vinnitska: {type: DataTypes.STRING},
    volunska: {type: DataTypes.STRING},
    zakarpatska: {type: DataTypes.STRING},
    zaporizka: {type: DataTypes.STRING},
    zhytomirska: {type: DataTypes.STRING}
});

const Visits = sequelize.define('visit', {
    ip: { type: DataTypes.STRING },
    userAgent: { type: DataTypes.STRING }
});

module.exports = {
    User,
    ClientBase,
    Regions,
    Visits,
    Pressure,
    WoterTemp,
    WindTemp
};