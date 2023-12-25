const { Regions } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class RegionsController {
  ////////////////////
  async getAllRegions(req, res) {
    const regions = await Regions.findAll();
    return res.json(regions);
  }

  async getOneRegions(req, res, next) {
    const { city } = req.params; // Використовуйте req.params.city для отримання значення параметра city
    try {
        const region = await Regions.findOne({ where: { name: city } }); // Виправте запит до бази даних
        if (!region) {
            throw ApiError.notFound('Region not found');
        }
        return res.json(region);
    } catch (error) {
        return next(error);
    }
}

  async createRegions(req, res, next) {
    try {
      const { name, pressure, temperature, presipitation, fetchLink, description } = req.body;
      // if (!req.files || !req.files.file) {
      //   return next(ApiError.forbidden('Відсутнє зображення'));
      // }
  
      // const image = req.files.file;
      // const allowedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
      // const fileExtension = path.extname(image.name);

      // if (!allowedExtensions.includes(fileExtension)) {
      //   return next(ApiError.badRequest('Неприпустимий тип файлу'));
      // }

      // const fileName = uuid.v4() + fileExtension;
      // const uploadPath = path.resolve(__dirname, '..', 'static', fileName);

      // await image.mv(uploadPath, (err) => {
      //   if (err) {
      //     return next(ApiError.internalServerError('Помилка при завантаженні зображення'));
      //   }
      // });

      const region = await Regions.create({
        name, 
        // pressure,
        // temperature,
        // presipitation,
        // fetchLink,
        // image: fileName,
        // description
      });

      res.json(region);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  


  async updateRegions(req, res, next) {
    try {
      const { 
        name, 
        pressure, 
        temperature, 
        presipitation, 
        fetchLink,
        image,
        description
       } = req.body;

      const region = await Regions.findOne({ where: { name } });
      
      if (!region) {
        return next(ApiError.notFound('Region not found'));
      }

      // Оновлення полів оголошення, якщо дані існують

      if (pressure) {
        region.pressure = pressure;
      }
      if (temperature) {
        region.temperature = temperature;
      }
      if (presipitation) {
        region.presipitation = presipitation;
      }
      if (fetchLink) {
        region.fetchLink = fetchLink;
      }
      if (description) {
        region.description = description;
      }
      if(image){
        region.image = image
      }
      


      await region.save();

      res.json(region);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }


  async deleteRegions(req, res, next) {
    try {
      const { id } = req.params;

      const region = await Regions.findOne({ where: { id } });
      if (!region) {
        return next(ApiError.notFound('Region not found'));
      }

      await region.destroy();

      res.json({ message: 'Region deleted successfully' });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}
module.exports = new RegionsController();


