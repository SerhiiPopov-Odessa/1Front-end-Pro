import { Provider } from 'react-redux';
import { HistoryRouter } from "redux-first-history/rr6";
import { store, history } from './redux/store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query'
import App from './App.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
