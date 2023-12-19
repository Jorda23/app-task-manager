import { BrowserRouter } from 'react-router-dom';
import { ManagerRoutes } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ManagerRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
