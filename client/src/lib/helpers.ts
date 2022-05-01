export const getServerAddress = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'http://ec2-34-230-30-149.compute-1.amazonaws.com';
};
