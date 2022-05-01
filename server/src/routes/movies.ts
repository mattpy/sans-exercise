import express from 'express';

import { AppDataSource } from '../data-source';
import { Movie } from '../entity/Movie';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/movies', auth, async (req, res) => {
  const movies = await AppDataSource.manager.find(Movie);
  return res.status(200).json(movies);
});

router.post('/movies', auth, async (req, res) => {
  const movie = AppDataSource.manager.create(Movie, req.body);
  const saved = await AppDataSource.manager.save(movie);
  return res.status(201).json(saved);
});

router.put('/movies', auth, async (req, res) => {
  await AppDataSource.manager.update(Movie, { id: req.body.id }, req.body);
  return res.status(200).json(req.body);
});

router.delete('/movies/:id', auth, async (req, res) => {
  const { id } = req.params;
  await AppDataSource.manager.delete(Movie, id);
  return res.status(200).json({ id: +id });
});

export default router;
