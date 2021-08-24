import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';

const Initial: React.FC = () => {
  return (
    <Container>
      <h1>Pesquise repositórios no Github</h1>
      <FaGithub size={180} />
    </Container>
  );
};

export { Initial };
