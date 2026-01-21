import { Route, Routes } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { routes } from "./constants/routes";
import { history } from "./redux/store";
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.keys(routes).map((item) => (
            <Route key={routes[item].id} element={routes[item].element} path={routes[item].path} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
