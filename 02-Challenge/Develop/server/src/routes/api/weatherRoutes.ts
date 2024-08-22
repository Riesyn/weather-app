import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';

import WeatherService from '../../service/weatherService.js';


// Dne: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {

  // Done: GET weather data from city name
  getWeather(req.body.city)
  // Done: save city to search history
  saveCity(req.body.city)
});

// DOne: GET search history
router.get('/history', async (req: Request, res: Response) => {
  try {
    const history = await HistoryService.getCities();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'Could not get search history', });
  }
});


// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    await HistoryService.removeCity(req.params.id);
    res.status(200).json({ message: 'City removed from search history', });
  } catch (error) {
    res.status(500).json({ error: 'Could not remove city from search history', });
  }

});

export default router;
