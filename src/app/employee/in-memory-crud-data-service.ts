import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryCrudDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 30,
        firstName: 'Vikas',
        lastName: 'Bhatia',
        email: 'vikas@gmail.com',
        phoneNumber: '7777565663',
        notification: 'email',
        isActive: true
      },
      {
        id: 31,
        firstName: 'Ranveer',
        lastName: 'Sehgal',
        email: 'ranveer@gmail.com',
        phoneNumber: '9845513271',
        notification: 'phone',
        isActive: true },
      {
        id: 32,
        firstName: 'Abhimanyu',
        lastName: 'Joshi',
        email: 'abhi@gmail.com',
        phoneNumber: '8645964284',
        notification: 'phone',
        isActive: true },
      {
        id: 33,
        firstName: 'Sanjay',
        lastName: 'Verma',
        email: 'sanjay@gmail.com',
        phoneNumber: '9900548263',
        notification: 'email',
        isActive: true },
      {
        id: 34,
        firstName: 'Akash',
        lastName: 'Kishan',
        email: 'akash@gmail.com',
        phoneNumber: '9865320721',
        notification: 'phone',
        isActive: true },
      {
        id: 35,
        firstName: 'Prinston',
        lastName: 'Fernandes',
        email: 'prinston@gmail.com',
        phoneNumber: '9743137942',
        notification: 'email',
        isActive: true },
    ];
    return {employees};
  }
}
