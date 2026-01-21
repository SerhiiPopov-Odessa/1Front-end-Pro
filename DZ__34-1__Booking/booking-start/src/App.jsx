import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {Object.keys(routes).map((item) => (
          <Route key={routes[item].id} element={routes[item].element} path={routes[item].path} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
