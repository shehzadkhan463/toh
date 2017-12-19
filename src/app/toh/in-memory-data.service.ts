import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Batman' },
      { id: 11, name: 'Hulk' },
      { id: 12, name: 'Green Latern'},
      { id: 13, name: 'Superman' },
      { id: 14, name: 'Spiderman' },
      { id: 15, name: 'Wolverine' },
      { id: 16, name: 'Green Arrow' },
      { id: 17, name: 'Thor' },
      { id: 18, name: 'Aquaman' },
      { id: 19, name: 'Captain America' },
      { id: 20, name: 'Ironman' }
    ];
    return (heroes);
  }
}
