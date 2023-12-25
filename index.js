require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const sequelize = require('./db')
const cors = require('cors');
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload')
const {logicDriveFunc} = require('./logicDriveFunc')

const app = express()
app.use(cors());
app.use(express.json());
app.use("/static", express.static(__dirname + '/static'));
app.use(fileUpload({}))
app.use('/api', router)

//Опрацювання помилок
app.use(errorHandler)
const fs = require('fs');


app.get('/', (req, res) => {
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Помилка сервера.');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(data);
    }
  });
});

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await logicDriveFunc()
    app.listen(PORT, () => console.log(`My server started on port ${PORT}`))
  } catch (e) {
    console.log('ПОЛИЛКА!!! ЕРОР!!!!!' + e)
  }
}

start()