import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

import Profile from '../pages/Profile';
import Practice from '../pages/Practice';
import TodoSaga from '../pages/TodoSaga';
import TodoThunk from '../pages/TodoThunk';
import SwapiThunk from '../pages/SwapiThunk';
import This from '../pages/This';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/profile" />} />

          <Route path="profile" element={<Profile />} />
          <Route path="practice" element={<Practice />} />
          <Route path="todo-saga" element={<TodoSaga />} />
          <Route path="todo-thunk" element={<TodoThunk />} />
          <Route path="swapi-thunk" element={<SwapiThunk />} />
          <Route path="this" element={<This />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
