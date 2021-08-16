import { Container } from './styles';

interface IProps {
  numberOfResults: number;
  newSearch: string;
  sortValue: string;
  changeSort?(value: string): void;
}

const sortOptions = [
  { option: 'match', label: 'Melhor match' },
  { option: 'mostStars', label: 'Mais estrelas' },
  { option: 'fewestStars', label: 'Menos estrelas' },
  { option: 'mostForks', label: 'Mais forks' },
  { option: 'fewestForks', label: 'Menos forks' },
  { option: 'recentUpdate', label: 'Atualizado recentemente' },
  { option: 'lastRecentUpdate', label: 'Atualizado a mais tempo' },
];

const DescriptionOfResults: React.FC<IProps> = ({
  numberOfResults,
  newSearch,
  sortValue,
  changeSort,
}) => {
  return (
    <Container>
      <h1>
        {numberOfResults.toLocaleString('pt-br')} resultados para : {newSearch}
      </h1>
      <select
        name="sortSelected"
        value={sortValue}
        onChange={(e) => changeSort && changeSort(e.target.value)}
      >
        {sortOptions.map((item) => (
          <option key={item.option} value={item.option}>
            {item.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export { DescriptionOfResults };
