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

import { format, set, toDate } from 'date-fns';
import { toast } from 'react-toastify';
import api from '../../services/api';

import {
  Header,
  Container,
  RepoArea,
  Loading,
  NoResults,
  Footer,
  Content,
  PagingArea,
} from './styles';

export default function Main() {
  const [text, setText] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfResults, setNumberOfResults] = useState(0);

  const [sort, setSort] = useState('match');
  const [sortOptions, setSortOptions] = useState([
    { option: 'match', label: 'Melhor match' },
    { option: 'mostStars', label: 'Mais estrelas' },
    { option: 'fewestStars', label: 'Menos estrelas' },
    { option: 'mostForks', label: 'Mais forks' },
    { option: 'fewestForks', label: 'Menos forks' },
    { option: 'recentUpdate', label: 'Atualizado recentemente' },
    { option: 'lastRecentUpdate', label: 'Atualizado a mais tempo' },
  ]);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [pagingControl, setPagingControl] = useState([]);

  const searchRepo = useCallback(
    (e) => {
      e.preventDefault();

      async function search() {
        if (text.trim() !== '') {
          setNewSearch(text);
          setLoading(true);
          const response = await api.get(`/search/repositories`, {
            params: {
              q: text,
              order: 'desc',
              per_page: 10,
              page: 1,
            },
          });

          setNumberOfResults(response.data.total_count);
          setSort('match');
          setResults(response.data.items);
          setPage(1);
          setLoading(false);
        } else {
          toast.error('O campo de pesquisa está vazio');
        }
      }

      search();
    },
    [results, text],
  );

  const changeSort = useCallback(
    (e) => {
      const selection = e.target.value;
      setSort(selection);

      const options = {
        match: { sortSelected: '', orderSelected: 'desc' },
        mostStars: { sortSelected: 'stars', orderSelected: 'desc' },
        fewestStars: { sortSelected: 'stars', orderSelected: 'asc' },
        mostForks: { sortSelected: 'forks', orderSelected: 'desc' },
        fewestForks: { sortSelected: 'forks', orderSelected: 'asc' },
        recentUpdate: { sortSelected: 'updated', orderSelected: 'desc' },
        lastRecentUpdate: { sortSelected: 'updated', orderSelected: 'asc' },
      };

      const { sortSelected } = options[selection];
      const { orderSelected } = options[selection];

      async function change() {
        setLoading(true);
        const response = await api.get(`/search/repositories`, {
          params: {
            q: newSearch,
            sort: sortSelected,
            order: orderSelected,
            per_page: 10,
            page: 1,
          },
        });
        setResults(response.data.items);
        setPage(1);
        setLoading(false);
      }

      change();
    },
    [newSearch, sort],
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
    (item) => {
      async function goToPage(toPage) {
        setLoading(true);
        const response = await api.get(`/search/repositories`, {
          params: {
            q: newSearch,
            sort,
            order: 'desc',
            per_page: 10,
            page: +toPage,
          },
        });

        setResults(response.data.items);
        setLoading(false);
      }

      goToPage(item);
      setPage(item);
    },
    [page, numberOfResults, newSearch, results, sort, lastPage, pagingControl],
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
          <div>
            <h1>Inicio</h1>
          </div>
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
                      <select name="sort" value={sort} onChange={changeSort}>
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
                        Primeira página
                      </button>
                      <button
                        type="button"
                        disabled={page < 2}
                        onClick={() => {
                          changePage(page - 1);
                        }}
                      >
                        <FaChevronLeft />
                        Anterior
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
                        Próxima
                        <FaChevronRight />
                      </button>
                      <button
                        type="button"
                        disabled={page === lastPage}
                        onClick={() => {
                          changePage(lastPage);
                        }}
                      >
                        Última página
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
