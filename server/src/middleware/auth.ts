import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    jwt.verify(token, 'secret');
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};
