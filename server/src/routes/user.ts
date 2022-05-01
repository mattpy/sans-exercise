import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', async (req, res) => {
  const token = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 24 },
    process.env.JWT_ACCESS_TOKEN || 'secret'
  );

  return res.status(200).json({ token });
});

export default router;
