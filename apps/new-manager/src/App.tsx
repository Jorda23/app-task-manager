import { BrowserRouter } from 'react-router-dom';
import { ManagerRoutes } from './routes';

function App() {

  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}

export default App;
