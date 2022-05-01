export const getServerAddress = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:7000'
    : 'http://localhost:7000';
};
