import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/AppContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </BrowserRouter>
  );
}