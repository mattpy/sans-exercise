import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { AppDataSource } from './data-source';
import movieRoutes from './routes/movies';

// const PORT = process.env.PORT;
const PORT = process.env.PORT || 7000;

(async () => {
  // Setup connection to database
  await AppDataSource.initialize();

  const app = express();

  // Set headers to prevent CORS errors
  app.use(cors());

  // Make request body accessible
  app.use(express.json());

  // Routes
  app.use(movieRoutes);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
