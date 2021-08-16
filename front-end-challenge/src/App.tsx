import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';
import { Main } from './pages/Main';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer autoClose={1000} />
      <Main />
    </div>
  );
};

export { App };
