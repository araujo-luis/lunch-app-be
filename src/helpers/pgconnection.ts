import { ConnectionOptions } from 'typeorm';
import Lunch from '../entities/Lunch';
 
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number('5432'),
  username: 'postgres',
  password: 'admin',
  database: 'lunchdb',
  entities: [
   Lunch
  ],
  synchronize: true,
};
 
export default config;