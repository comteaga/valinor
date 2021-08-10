import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';
import Main from './pages/Main';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Main />
    </div>
  );
}
