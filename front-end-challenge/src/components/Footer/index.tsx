import { IoMailOutline } from 'react-icons/io5';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Desenvolvido por Matheus Pansani Pedroso - 2021</p>
      <a href="mailto:matheus.pansani@outlook">
        <IoMailOutline size={16} /> Contato: matheus.pansani@outlook
      </a>
    </Container>
  );
};

export { Footer };
