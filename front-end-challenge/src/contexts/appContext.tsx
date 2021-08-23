import React, { useState, createContext } from 'react';
import { IGithubSearchItemsResponse } from '../services/api-service';

interface IContextData {
  newSearch: string;
  setNewSearch(newSearch: string): void;
  results: IGithubSearchItemsResponse[];
  setResults(results: IGithubSearchItemsResponse[]): void;
  loading: boolean;
  setLoading(loading: boolean): void;
  numberOfResults: number;
  setNumberOfResults(numberOfResults: number): void;
  sortValue: string;
  setSortValue(sortValue: string): void;
  sortSelected: string;
  setSortSelected(sortSelected: string): void;
  orderSelected: string;
  setOrderSelected(orderSelected: string): void;
  page: number;
  setPage(page: number): void;
  toggleSearch: boolean;
  setToggleSearch(toggleSearch: boolean): void;
  filterValue: string;
  setFilterValue(filterValue: string): void;
}

const AppContext = createContext<IContextData>({} as IContextData);

const AppProvider: React.FC = ({ children }) => {
  const [newSearch, setNewSearch] = useState<string>('');
  const [results, setResults] = useState<IGithubSearchItemsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [sortValue, setSortValue] = useState<string>('match');
  const [sortSelected, setSortSelected] = useState<string>('');
  const [orderSelected, setOrderSelected] = useState<string>('desc');
  const [page, setPage] = useState<number>(1);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        newSearch,
        setNewSearch,
        results,
        setResults,
        loading,
        setLoading,
        numberOfResults,
        setNumberOfResults,
        sortValue,
        setSortValue,
        sortSelected,
        setSortSelected,
        orderSelected,
        setOrderSelected,
        page,
        setPage,
        toggleSearch,
        setToggleSearch,
        filterValue,
        setFilterValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
