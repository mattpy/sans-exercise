import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { AppDataSource } from './data-source';
import movieRoutes from './routes/movies';
import userRoutes from './routes/user';

const PORT = process.env.PORT;

(async () => {
  // Setup connection to database
  await AppDataSource.initialize();

  const app = express();

  // Set headers to prevent CORS errors
  app.use(cors());

  // Make request body accessible
  app.use(express.json());

  // Setup cookie parser middleware
  app.use(cookieParser());

  // Routes
  app.use(userRoutes);
  app.use(movieRoutes);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
