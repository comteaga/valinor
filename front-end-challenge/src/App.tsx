import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';
import { Main } from './pages/Main';
import { AppProvider } from './contexts/appContext';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <ToastContainer autoClose={1000} />
      <Main />
    </AppProvider>
  );
};

export { App };
