import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <FaSpinner size={30} color="#222" />
      <h1>Carregando...</h1>
    </Container>
  );
};

export { Loading };
