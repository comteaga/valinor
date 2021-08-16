import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Container } from './styles';

interface IProps {
  changePage(value: number): void;
  page: number;
  pagingControl: number[];
  lastPage: number;
}

const PagingArea: React.FC<IProps> = ({
  changePage,
  page,
  pagingControl,
  lastPage,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

export { PagingArea };
