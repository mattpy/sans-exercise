import { DataSource } from 'typeorm';
import { Movie } from './entity/Movie';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: process.env.MYSQL_USER_PASSWORD,
  database: 'sans',
  synchronize: true,
  logging: false,
  entities: [Movie],
  migrations: [],
});
