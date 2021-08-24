import { useEffect, useCallback, useState, useContext } from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Container } from './styles';
import AppContext from '../../contexts/appContext';
import { searchRepositories } from '../../services/api-service';

const PagingArea: React.FC = () => {
  const {
    numberOfResults,
    page,
    setLoading,
    newSearch,
    filterValue,
    sortSelected,
    orderSelected,
    setResults,
    setPage,
  } = useContext(AppContext);

  const [lastPage, setLastPage] = useState<number>(1);
  const [pagingControl, setPagingControl] = useState<number[]>([]);

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
            q: `${newSearch} ${filterValue}`,
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
    [newSearch, sortSelected, orderSelected, filterValue],
  );
  return (
    <Container>
      <div id="fistSection">
        <button
          type="button"
          className="jumpPageButton"
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
          className="jumpPageButton"
          disabled={page < 2}
          onClick={() => {
            changePage(page - 1);
          }}
        >
          <FaChevronLeft />
          <span>Anterior</span>
        </button>
      </div>

      <div id="secondSection">
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
            <button
              key={item}
              className="pageButton"
              onClick={() => changePage(item)}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <div id="thirdSection">
        <button
          type="button"
          className="jumpPageButton"
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
          className="jumpPageButton"
          disabled={page === lastPage}
          onClick={() => {
            changePage(lastPage);
          }}
        >
          <span>Última página</span>
          <FaAngleDoubleRight />
        </button>
      </div>
    </Container>
  );
};

export { PagingArea };
