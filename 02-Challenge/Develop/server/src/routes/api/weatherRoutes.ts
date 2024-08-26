import { Router, type Request, type Response } from 'express';


import HistoryService from '../../service/historyService.js';

import WeatherService from '../../service/weatherService.js';

const router = Router();


// Dne: POST Request with city name to retrieve weather data
router.post('/', (req: Request, _res: Response) => {////////////////////////////////////////////possible error 

  // Done: GET weather data from city name
  WeatherService.getWeatherForCity(req.body.cityName)
  // Done: save city to search history
  HistoryService.addCity(req.body.cityName)////////////////////////////////TODO

});

// DOne: GET search history
router.get('/history', async (_req: Request, res: Response) => {//////////////////////possible error
  try {
    const history = HistoryService.getCities();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'Could not get search history', });
  }
});


// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    await HistoryService.removeCity(req.params.id); //TODO add to histtoyservice
    res.status(200).json({ message: 'City removed from search history', });
  } catch (error) {
    res.status(500).json({ error: 'Could not remove city from search history', });
  }

});

export default router;
