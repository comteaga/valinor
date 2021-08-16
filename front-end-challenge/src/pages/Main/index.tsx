import { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import {
  GithubSearchItemsResponse,
  searchRepositories,
} from '../../services/api-service';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Initial } from '../../components/Initial';
import { Loading } from '../../components/Loading';
import { NoResults } from '../../components/NoResults';
import { DescriptionOfResults } from '../../components/DescriptionOfResults';
import { RepoArea } from '../../components/RepoArea';
import { PagingArea } from '../../components/PagingArea';
import { Footer } from '../../components/Footer';

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

const Main: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [newSearch, setNewSearch] = useState<string>('');
  const [results, setResults] = useState<GithubSearchItemsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [sortValue, setSortValue] = useState<string>('match');
  const [sortSelected, setSortSelected] = useState<string>('');
  const [orderSelected, setOrderSelected] = useState<string>('desc');
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [pagingControl, setPagingControl] = useState<number[]>([]);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  useEffect(() => {
    if (toggleSearch) {
      document.body.style.overflow = 'hidden';
    }
    if (!toggleSearch) {
      document.body.style.overflow = 'visible';
    }
  }, [toggleSearch]);

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
          setNewSearch('');
          setNumberOfResults(0);
          setSortValue('match');
          setResults([]);
          setPage(1);
          setLoading(false);
          toast.error('O campo de pesquisa está vazio');
        }
      }

      search();
    },
    [text],
  );

  const changeSort = useCallback(
    (value: string) => {
      const options: SortableAttributes = {
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

      setSortValue(value);
      setSortSelected(sort);
      setOrderSelected(order);
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
            sort: sortSelected,
            order: orderSelected,
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
    [newSearch, sortSelected, orderSelected],
  );

  return (
    <Container>
      <Header
        text={text}
        searchRepo={searchRepo}
        setText={setText}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
      />

      <Content>
        {newSearch === '' ? (
          <Initial />
        ) : (
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {results.length <= 0 ? (
                  <NoResults />
                ) : (
                  <>
                    <DescriptionOfResults
                      numberOfResults={numberOfResults}
                      newSearch={newSearch}
                      sortValue={sortValue}
                      changeSort={changeSort}
                    />
                    <RepoArea results={results} />

                    <PagingArea
                      changePage={changePage}
                      page={page}
                      pagingControl={pagingControl}
                      lastPage={lastPage}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
      </Content>
      {!toggleSearch && <Footer />}
    </Container>
  );
};

export { Main };
