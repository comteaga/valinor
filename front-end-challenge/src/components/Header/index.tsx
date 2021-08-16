import { useState } from 'react';
import { FaArrowLeft, FaGithub, FaSearch } from 'react-icons/fa';
import { Container } from './styles';

interface IProps {
  text?: string;
  searchRepo?(e: React.FormEvent<HTMLFormElement>): void;
  setText?(text: string): void;
  toggleSearch: boolean;
  setToggleSearch(active: boolean): void;
}

const Header: React.FC<IProps> = ({
  text,
  searchRepo,
  setText,
  toggleSearch,
  setToggleSearch,
}) => {
  return (
    <Container>
      <div className="logo">
        <FaGithub size={30} color="#fff" />
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
          <FaSearch size={28} color="#ddd" />
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
          <FaSearch size={14} color="#ddd" />
        </button>
      </form>
    </Container>
  );
};

export { Header };
