import { FaFilter } from 'react-icons/fa';
import { GrSort } from 'react-icons/gr';
import { useCallback, useContext } from 'react';
import { Container } from './styles';
import { Select } from '../Select';
import AppContext from '../../contexts/appContext';
import { searchRepositories } from '../../services/api-service';

interface ISortType {
  sort: '' | 'stars' | 'forks' | 'updated';
  order: 'desc' | 'asc';
}

interface ISortableAttributes {
  [name: string]: ISortType;
  match: ISortType;
  mostStars: ISortType;
  fewestStars: ISortType;
  mostForks: ISortType;
  fewestForks: ISortType;
  recentUpdate: ISortType;
  lastRecentUpdate: ISortType;
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

const DescriptionOfResults: React.FC = () => {
  const {
    setLoading,
    newSearch,
    filterValue,
    setResults,
    setPage,
    setSortValue,
    setSortSelected,
    setOrderSelected,
    sortSelected,
    orderSelected,
    setNumberOfResults,
    setFilterValue,
    numberOfResults,
    sortValue,
  } = useContext(AppContext);

  const changeSort = useCallback(
    (value: string) => {
      const options: ISortableAttributes = {
        match: { sort: '', order: 'desc' },
        mostStars: { sort: 'stars', order: 'desc' },
        fewestStars: { sort: 'stars', order: 'asc' },
        mostForks: { sort: 'forks', order: 'desc' },
        fewestForks: { sort: 'forks', order: 'asc' },
        recentUpdate: { sort: 'updated', order: 'desc' },
        lastRecentUpdate: { sort: 'updated', order: 'asc' },
      };

      const { sort } = options[value];
      const { order } = options[value];

      async function change() {
        setLoading(true);
        try {
          const response = await searchRepositories({
            q: `${newSearch} ${filterValue}`,
            sort,
            order,
          });
          setResults(response.data.items);
          setPage(1);
        } finally {
          setLoading(false);
        }
      }

      change();

      setSortValue(value);
      setSortSelected(sort);
      setOrderSelected(order);
    },
    [newSearch, filterValue],
  );

  const changeFilter = useCallback(
    (value: string) => {
      async function filterResults() {
        setLoading(true);
        try {
          const response = await searchRepositories({
            q: `${newSearch} ${value}`,
            sort: sortSelected,
            order: orderSelected,
          });
          setResults(response.data.items);
          setNumberOfResults(response.data.total_count);
          setPage(1);
        } finally {
          setLoading(false);
        }
      }

      filterResults();
      setFilterValue(value);
    },
    [newSearch, sortSelected, orderSelected],
  );

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
