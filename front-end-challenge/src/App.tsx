import GlobalStyle from './styles/global';
import { Main } from './pages/Main';
import { AppProvider } from './contexts/appContext';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Main />
    </AppProvider>
  );
};

export { App };
