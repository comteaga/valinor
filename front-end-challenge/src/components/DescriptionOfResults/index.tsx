import { FaFilter } from 'react-icons/fa';
import { GrSort } from 'react-icons/gr';
import { useState } from 'react';
import { Container } from './styles';
import { Select } from '../Select';

interface IProps {
  numberOfResults: number;
  newSearch: string;
  sortValue: string;
  filterValue: string;
  changeSort?(value: string): void;
  changeFilter?(value: string): void;
}

const sortOptions = [
  { value: 'match', label: 'Melhor match' },
  { value: 'mostStars', label: 'Mais estrelas' },
  { value: 'fewestStars', label: 'Menos estrelas' },
  { value: 'mostForks', label: 'Mais forks' },
  { value: 'fewestForks', label: 'Menos forks' },
  { value: 'recentUpdate', label: 'Atualizado recentemente' },
  { value: 'lastRecentUpdate', label: 'Atualizado a mais tempo' },
];

const filterOptions = [
  { value: '', label: 'Omitir forks' },
  { value: 'fork:true', label: 'Todos' },
  { value: 'fork:only', label: 'Apenas forks' },
];

const DescriptionOfResults: React.FC<IProps> = ({
  numberOfResults,
  newSearch,
  sortValue,
  changeSort,
  filterValue,
  changeFilter,
}) => {
  return (
    <Container>
      <h1>
        {numberOfResults.toLocaleString('pt-br')} resultados para : {newSearch}
      </h1>
      <div className="selectArea">
        <Select
          options={sortOptions}
          icon={<GrSort size={14} color="#555" />}
          actualValue={sortValue}
          changeValue={changeSort}
          className="select"
        />

        <Select
          options={filterOptions}
          icon={<FaFilter size={14} color="#555" />}
          actualValue={filterValue}
          changeValue={changeFilter}
          className="select"
        />
      </div>
    </Container>
  );
};

export { DescriptionOfResults };
