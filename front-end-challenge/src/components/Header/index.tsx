import { useEffect, useRef, useState, useContext, useCallback } from 'react';
import { FaArrowLeft, FaGithub, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from './styles';
import AppContext from '../../contexts/appContext';
import { searchRepositories } from '../../services/api-service';

const Header: React.FC = () => {
  const {
    toggleSearch,
    setNewSearch,
    setLoading,
    setNumberOfResults,
    setResults,
    setSortValue,
    setPage,
    setFilterValue,
    setToggleSearch,
  } = useContext(AppContext);

  const inputRef = useRef<null | HTMLElement>(null);

  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (toggleSearch && inputRef.current) {
      inputRef.current.focus();
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
            setResults(response.data.items);
          } finally {
            setLoading(false);
          }
        } else {
          setNewSearch('');
          setNumberOfResults(0);
          setResults([]);
          setLoading(false);
          toast.error('O campo de pesquisa está vazio');
        }
      }

      search();
      setSortValue('match');
      setPage(1);
      setFilterValue('');
    },
    [text],
  );

  return (
    <Container>
      <div className="logo">
        <FaGithub size={36} color="#fff" />
        <h1>Repositórios</h1>
      </div>
      <form
        className={toggleSearch === false ? 'searchBox' : 'searchBoxToggleOn'}
        onSubmit={searchRepo}
      >
        <button
          type="button"
          className={toggleSearch === false ? 'toggleSearch' : 'toggleSearchOn'}
          onClick={() => setToggleSearch(!toggleSearch)}
        >
          <FaSearch size={30} color="#ddd" />
        </button>
        <button
          type="button"
          className={
            toggleSearch === false ? 'backButton' : 'backButtonToggleOn'
          }
          onClick={() => setToggleSearch(!toggleSearch)}
        >
          <FaArrowLeft size={30} color="#ddd" />
        </button>
        <input
          type="text"
          ref={inputRef as any}
          placeholder="Buscar repositórios"
          className={
            toggleSearch === false ? 'searchInput' : 'searchInputToggleOn'
          }
          value={text}
          onChange={(e) => setText && setText(e.target.value)}
        />
        <button
          type="submit"
          className={toggleSearch === false ? 'newSearch' : 'newSearchToggleOn'}
          onClick={() => {
            if (toggleSearch) {
              setToggleSearch(!toggleSearch);
            }
          }}
        >
          <FaSearch size={20} color="#ddd" />
        </button>
      </form>
    </Container>
  );
};

export { Header };
