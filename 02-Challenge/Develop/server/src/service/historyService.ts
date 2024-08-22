// TODO: Define a City class with name and id properties

import { promises as fs } from 'fs';

class City {
  constructor(public id: string, public name: string) { }
}


// TODO: Complete the HistoryService class
class HistoryService {
  getCities() {
    throw new Error('Method not implemented.');
  }
  private filePath = 'searchHistory.json';

  // Read method to read from the searchHistory.json file
  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) as City[];
    } catch (error) {
      if (error.code === 'ENOENT') {
        // If file does not exist, return an empty array
        return [];
      }
      throw error;
    }
  }

  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

    // Write method to write to the searchHistory.json file
    private async write(cities: City[]): Promise < void> {
  await fs.writeFile(this.filePath, JSON.stringify(cities));
}

export default new HistoryService();


