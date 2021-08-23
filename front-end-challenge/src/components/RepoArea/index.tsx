import { VscRepoForked, VscRepo } from 'react-icons/vsc';
import { FaRegStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { IGithubSearchItemsResponse } from '../../services/api-service';
import { Container } from './styles';

interface IProps {
  repo: IGithubSearchItemsResponse;
}

const RepoArea: React.FC<IProps> = ({ repo }) => {
  return (
    <Container key={String(repo.id)}>
      <img src={repo.owner.avatar_url} alt={repo.name} />
      <div className="info">
        <a className="name" href={repo.html_url}>
          {repo.fork ? (
            <VscRepoForked size={22} color="#596069" />
          ) : (
            <VscRepo size={20} color="#596069" />
          )}
          {repo.full_name}
        </a>
        <p className="description">{repo.description}</p>
        <div className="details">
          <div className="detailsNumbers">
            <a className="link" href={`${repo.html_url}/stargazers`}>
              {' '}
              <FaRegStar size={16} color="#596069" />{' '}
              {repo.stargazers_count.toLocaleString('en', {
                notation: 'compact',
              })}
            </a>
            <a className="link" href={`${repo.html_url}/network/members`}>
              {' '}
              <VscRepoForked size={16} color="#596069" />{' '}
              {repo.forks.toLocaleString('en', {
                notation: 'compact',
              })}
            </a>
            <a className="link" href={`${repo.html_url}/issues`}>
              {repo.open_issues} issues abertas
            </a>
            {repo.size >= 1024 ? (
              <p>
                Tamanho:{' '}
                {`${(repo.size / 1024).toLocaleString('pt-br', {
                  maximumFractionDigits: 1,
                  minimumFractionDigits: 0,
                })} MB`}
              </p>
            ) : (
              <p>
                Tamanho:{' '}
                {`${repo.size.toLocaleString('pt-br', {
                  maximumFractionDigits: 1,
                  minimumFractionDigits: 0,
                })} KB`}
              </p>
            )}
          </div>
          <div className="detailsType">
            <p>Linguagem: {repo.language !== null ? repo.language : '-'}</p>
            <p>Licença: {repo.license !== null ? repo.license.spdx_id : '-'}</p>
          </div>
          <div className="detailsDates">
            <p>Criado em: {format(new Date(repo.created_at), 'dd/MM/yy')}</p>
            <p>
              Atualizado em: {format(new Date(repo.updated_at), 'dd/MM/yy')}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { RepoArea };
