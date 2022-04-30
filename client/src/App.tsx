import { Navigate, Routes, Route } from 'react-router-dom';

import Layout from 'common/Layout';
import LoginPage from 'routes/login';
import MoviesPage from 'routes/movies';

const App: React.FC = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route element={<Layout />}>
      <Route path='movies' element={<MoviesPage />} />
    </Route>
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);

export default App;
