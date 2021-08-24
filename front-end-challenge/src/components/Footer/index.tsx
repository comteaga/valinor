import { IoMailOutline } from 'react-icons/io5';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Desenvolvido por Matheus Pansani Pedroso</p>
      <a href="mailto:matheus.pansani@outlook.com">
        <IoMailOutline size={16} /> Contato: matheus.pansani@outlook.com
      </a>
    </Container>
  );
};

export { Footer };
