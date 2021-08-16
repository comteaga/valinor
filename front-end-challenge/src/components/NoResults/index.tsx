import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

const NoResults = () => {
  return (
    <Container>
      <FaSpinner size={30} color="#222" />
      <h1>Carregando...</h1>
    </Container>
  );
};

export { NoResults };
