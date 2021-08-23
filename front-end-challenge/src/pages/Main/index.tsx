import { useEffect, useContext } from 'react';
import AppContext from '../../contexts/appContext';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Initial } from '../../components/Initial';
import { Loading } from '../../components/Loading';
import { NoResults } from '../../components/NoResults';
import { DescriptionOfResults } from '../../components/DescriptionOfResults';
import { RepoArea } from '../../components/RepoArea';
import { PagingArea } from '../../components/PagingArea';
import { Footer } from '../../components/Footer';

const Main: React.FC = () => {
  const { toggleSearch, newSearch, loading, results } = useContext(AppContext);

  useEffect(() => {
    if (toggleSearch) {
      document.body.style.overflow = 'hidden';
    }
    if (!toggleSearch) {
      document.body.style.overflow = 'visible';
    }
  }, [toggleSearch]);

  return (
    <Container>
      <Header />

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
                    <DescriptionOfResults />
                    {results.map((repo) => (
                      <RepoArea repo={repo} />
                    ))}

                    <PagingArea />
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
