import { useEffect, useState, useCallback } from 'react';

import {
  FaGithub,
  FaSearch,
  FaSpinner,
  FaRegStar,
  FaChevronRight,
  FaChevronLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

import { BiGitRepoForked } from 'react-icons/bi';

import { format } from 'date-fns';
import { toast } from 'react-toastify';

import {
  GithubSearchItemsResponse,
  searchRepositories,
} from '../../services/api-service';

import {
  Header,
  Container,
  RepoArea,
  Loading,
  NoResults,
  Footer,
  Content,
  PagingArea,
  Initial,
} from './styles';

interface SortType {
  sort: '' | 'stars' | 'forks' | 'updated';
  order: 'desc' | 'asc';
}

interface SortableAttributes {
  [name: string]: SortType;
  match: SortType;
  mostStars: SortType;
  fewestStars: SortType;
  mostForks: SortType;
  fewestForks: SortType;
  recentUpdate: SortType;
  lastRecentUpdate: SortType;
}

export default function Main() {
  const [text, setText] = useState<string>('');
  const [newSearch, setNewSearch] = useState<string>('');
  const [results, setResults] = useState<GithubSearchItemsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [sortValue, setSortValue] = useState<string>('match');
  const [sort, setSort] = useState<string>('');
  const [order, setOrder] = useState<string>('desc');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [pagingControl, setPagingControl] = useState<number[]>([]);

  const sortOptions = [
    { option: 'match', label: 'Melhor match' },
    { option: 'mostStars', label: 'Mais estrelas' },
    { option: 'fewestStars', label: 'Menos estrelas' },
    { option: 'mostForks', label: 'Mais forks' },
    { option: 'fewestForks', label: 'Menos forks' },
    { option: 'recentUpdate', label: 'Atualizado recentemente' },
    { option: 'lastRecentUpdate', label: 'Atualizado a mais tempo' },
  ];

  const searchRepo = useCallback(
    (e) => {
      e.preventDefault();

      async function search() {
        if (text.trim() !== '') {
          setNewSearch(text);
          setLoading(true);
          try {
            const response = await searchRepositories({ q: text });

            setNumberOfResults(response.data.total_count);
            setSortValue('match');
            setResults(response.data.items);
            setPage(1);
          } finally {
            setLoading(false);
          }
        } else {
          toast.error('O campo de pesquisa está vazio');
        }
      }

      search();
    },
    [text],
  );

  const changeSort = useCallback(
    (e) => {
      const selection: string = e.target.value;
      setSortValue(selection);

      const options: SortableAttributes = {
        match: { sort: '', order: 'desc' },
        mostStars: { sort: 'stars', order: 'desc' },
        fewestStars: { sort: 'stars', order: 'asc' },
        mostForks: { sort: 'forks', order: 'desc' },
        fewestForks: { sort: 'forks', order: 'asc' },
        recentUpdate: { sort: 'updated', order: 'desc' },
        lastRecentUpdate: { sort: 'updated', order: 'asc' },
      };

      const { sort } = options[selection];
      const { order } = options[selection];

      async function change() {
        setLoading(true);
        try {
          const response = await searchRepositories({
            q: newSearch,
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

      setSort(sort);
      setOrder(order);
    },
    [newSearch],
  );

  useEffect(() => {
    const maxButtons = 5;
    const maxPage =
      Math.ceil(numberOfResults / 10) < 100
        ? Math.ceil(numberOfResults / 10)
        : 100;

    let maxLeft = page - Math.floor(maxButtons / 2);
    let maxRight = page + Math.floor(maxButtons / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxButtons;
    }

    if (maxRight > maxPage) {
      maxRight = maxPage;
      maxLeft = maxPage - (maxButtons - 1) > 1 ? maxPage - (maxButtons - 1) : 1;
    }

    const listOfButtons = [];

    for (let item = maxLeft; item <= maxRight; item++) {
      listOfButtons.push(item);
    }

    setLastPage(maxPage);
    setPagingControl(listOfButtons);
  }, [page, numberOfResults]);

  const changePage = useCallback(
    (item: number) => {
      async function goToPage(toPage: number) {
        setLoading(true);
        try {
          const response = await searchRepositories({
            q: newSearch,
            sort,
            order,
            page: +toPage,
          });
          setResults(response.data.items);
          setPage(item);
        } finally {
          setLoading(false);
        }
      }

      goToPage(item);
    },
    [newSearch, sortValue, sort, order],
  );

  return (
    <Container>
      <Header>
        <div className="logo">
          <FaGithub size={30} color="#fff" />
          <h1>Repositórios</h1>
        </div>
        <form className="searchBox" onSubmit={searchRepo}>
          <input
            type="text"
            placeholder="Buscar repositórios"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">
            <FaSearch size={14} color="#ddd" />
          </button>
        </form>
      </Header>

      <Content>
        {newSearch === '' ? (
          <Initial>
            <h1>Pesquise repositórios no Github</h1>
            <FaGithub size={200} />
          </Initial>
        ) : (
          <>
            {loading ? (
              <Loading>
                <FaSpinner size={30} color="#222" />
                <h1>Carregando...</h1>
              </Loading>
            ) : (
              <>
                {results.length <= 0 ? (
                  <NoResults>Nenhum resultado encontrado!</NoResults>
                ) : (
                  <>
                    <div className="results">
                      <h1>
                        {numberOfResults.toLocaleString('pt-br')} resultados
                        para: {newSearch}
                      </h1>
                      <select
                        name="sort"
                        value={sortValue}
                        onChange={changeSort}
                      >
                        {sortOptions.map((item) => (
                          <option key={item.option} value={item.option}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {results.map((repo) => (
                      <RepoArea key={String(repo.id)}>
                        <img src={repo.owner.avatar_url} alt={repo.name} />
                        <div className="info">
                          <a className="name" href={repo.html_url}>
                            {repo.full_name}
                          </a>
                          <p>{repo.description}</p>
                          <div className="details">
                            <a
                              className="stars"
                              href={`${repo.html_url}/stargazers`}
                            >
                              {' '}
                              <FaRegStar size={14} color="#596069" />{' '}
                              {repo.watchers.toLocaleString('en', {
                                notation: 'compact',
                              })}
                            </a>
                            <p>
                              {' '}
                              <BiGitRepoForked size={14} color="#596069" />{' '}
                              {repo.forks.toLocaleString('en', {
                                notation: 'compact',
                              })}
                            </p>
                            <p>{repo.language}</p>
                            <p>
                              {repo.license !== null
                                ? repo.license.spdx_id
                                : '-'}
                            </p>
                            <p>
                              Criado em{' '}
                              {format(new Date(repo.created_at), 'dd/MM/yy')}
                            </p>
                            <p>
                              Atualizado em{' '}
                              {format(new Date(repo.updated_at), 'dd/MM/yy')}
                            </p>
                            <p>{repo.open_issues} issues abertas</p>
                          </div>
                        </div>
                      </RepoArea>
                    ))}
                    <PagingArea>
                      <button
                        type="button"
                        disabled={page === 1}
                        onClick={() => {
                          changePage(1);
                        }}
                      >
                        <FaAngleDoubleLeft />
                        <span>Primeira página</span>
                      </button>
                      <button
                        type="button"
                        disabled={page < 2}
                        onClick={() => {
                          changePage(page - 1);
                        }}
                      >
                        <FaChevronLeft />
                        <span>Anterior</span>
                      </button>

                      {pagingControl.map((item) =>
                        item === page ? (
                          <button
                            key={item}
                            className="pageButtonSelected"
                            onClick={() => changePage(item)}
                          >
                            {item}
                          </button>
                        ) : (
                          <button key={item} onClick={() => changePage(item)}>
                            {item}
                          </button>
                        ),
                      )}

                      <button
                        type="button"
                        disabled={page === lastPage}
                        onClick={() => {
                          changePage(page + 1);
                        }}
                      >
                        <span>Próxima</span>
                        <FaChevronRight />
                      </button>
                      <button
                        type="button"
                        disabled={page === lastPage}
                        onClick={() => {
                          changePage(lastPage);
                        }}
                      >
                        <span>Última página</span>
                        <FaAngleDoubleRight />
                      </button>
                    </PagingArea>
                  </>
                )}
              </>
            )}
          </>
        )}
      </Content>
      <Footer>
        <p>Desenvolvido por Matheus Pansani Pedroso - 2021</p>
      </Footer>
    </Container>
  );
}
