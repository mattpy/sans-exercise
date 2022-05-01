import { DataSource } from 'typeorm';
import { Movie } from './entity/Movie';

export const AppDataSource = new DataSource({
  type: 'mysql',
  // host: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'sans',
  synchronize: true,
  logging: false,
  entities: [Movie],
  migrations: [],
  subscribers: []
});
