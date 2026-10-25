import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

import Profile from '../pages/Profile';
import Practice from '../pages/Practice';
import Booking from '../pages/Booking';
import TodoSaga from '../pages/TodoSaga';
import TodoThunk from '../pages/TodoThunk';
import TodoZustand from '../pages/TodoZustand';
import VanilaJS from '../pages/VanillaJS';
import Testing from '../pages/Testing';
import PracticeNextJS from '../pages/PracticeNextJS';
import AIAgents from '../pages/AIAgents';
import This from '../pages/This';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/profile" />} />

          <Route path="profile" element={<Profile />} />
          <Route path="practice" element={<Practice />} />
          <Route path="booking" element={<Booking />} />
          <Route path="todo-saga" element={<TodoSaga />} />
          <Route path="testing" element={<Testing />} />
          <Route path="todo-thunk" element={<TodoThunk />} />
          <Route path="todoZustand" element={<TodoZustand />} />
          <Route path="vanilaJS" element={<VanilaJS />} />
          <Route path="practiceNextJS" element={<PracticeNextJS />} />
          <Route path="AIAgents" element={<AIAgents />} />
          <Route path="this" element={<This />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
