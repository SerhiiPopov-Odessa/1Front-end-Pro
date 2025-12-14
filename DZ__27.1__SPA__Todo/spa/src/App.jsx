import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ChangeThemeContext, themes } from './context/changeThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFount';
import './App.css';

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <>
      <ChangeThemeContext.Provider value={[theme, setTheme]} >
        <BrowserRouter>
          <div className={`content ${theme.themeClassName}`}>
            <Header />
            <ErrorBoundary>
              <main >
                <Routes>
                  <Route path="/company" element={<Navigate to="/about" replace />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </ErrorBoundary>
          </div>
        </BrowserRouter>
      </ChangeThemeContext.Provider>
    </>
  )
}
export default App
