import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
