/* eslint-disable camelcase */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});
interface IGithubSearchItemsResponse {
  id: number;
  name: string;
  full_name: string;
  description: string;
  fork: string;
  size: number;
  url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
  forks: number;
  open_issues: number;
  license: {
    spdx_id: string;
  };
  owner: {
    avatar_url: string;
  };
}

interface IGithubSearchResponse {
  total_count: number;
  items: IGithubSearchItemsResponse[];
}

interface IGithubSearchRequest {
  q: string;
  sort?: string;
  order?: string;
  per_page?: number;
  page?: number;
}

const searchRepositories = (data: IGithubSearchRequest) => {
  return api.get<IGithubSearchResponse>(`/search/repositories`, {
    params: {
      q: data.q,
      sort: data.sort || '',
      order: data.order || 'desc',
      page: data.page || 1,
      per_page: 10,
    },
  });
};
export { searchRepositories };
export type { IGithubSearchResponse, IGithubSearchItemsResponse };
