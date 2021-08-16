import React from 'react';
import { BiGitRepoForked } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { GithubSearchItemsResponse } from '../../services/api-service';
import { Container } from './styles';

interface IProps {
  results: GithubSearchItemsResponse[];
}

const RepoArea: React.FC<IProps> = ({ results }) => {
  return (
    <>
      {results.map((repo) => (
        <Container key={String(repo.id)}>
          <img src={repo.owner.avatar_url} alt={repo.name} />
          <div className="info">
            <a className="name" href={repo.html_url}>
              {repo.full_name}
            </a>
            <div className="description">
              <p>{repo.description}</p>
            </div>
            <div className="details">
              <div className="detailsNumbers">
                <a className="link" href={`${repo.html_url}/stargazers`}>
                  {' '}
                  <FaRegStar size={16} color="#596069" />{' '}
                  {repo.watchers.toLocaleString('en', {
                    notation: 'compact',
                  })}
                </a>
                <a className="link" href={`${repo.html_url}/network/members`}>
                  {' '}
                  <BiGitRepoForked size={16} color="#596069" />{' '}
                  {repo.forks.toLocaleString('en', {
                    notation: 'compact',
                  })}
                </a>
                <a className="link" href={`${repo.html_url}/issues`}>
                  {repo.open_issues} issues abertas
                </a>
              </div>

              <div className="detailsType">
                <p>Linguagem: {repo.language !== null ? repo.language : '-'}</p>
                <p>
                  Licensa: {repo.license !== null ? repo.license.spdx_id : '-'}
                </p>
              </div>
              <div className="detailsDates">
                <p>Criado em {format(new Date(repo.created_at), 'dd/MM/yy')}</p>
                <p>
                  Atualizado em {format(new Date(repo.updated_at), 'dd/MM/yy')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
};

export { RepoArea };
