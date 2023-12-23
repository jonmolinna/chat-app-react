import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Missing from './pages/Missing';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Rutas Publicas */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        {/* Rutas Privadas */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Route>

        {/* Error 404 */}
        <Route path='*' element={<Missing />} />

      </Route>
    </Routes>
  );
};

export default App;
