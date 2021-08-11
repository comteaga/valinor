import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});
interface GithubSearchItemsResponse {
  id: number;
  name: string;
  full_name: string;
  description: string;
  fork: string;
  url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  watchers_count: number;
  language: string;
  forks: number;
  open_issues: number;
  watchers: number;
  license: {
    spdx_id: string;
  };
  owner: {
    avatar_url: string;
  };
}

interface GithubSearchResponse {
  total_count: number;
  items: GithubSearchItemsResponse[];
}

interface GithubSearchRequest {
  q: string;
  sort?: string;
  order?: string;
  per_page?: number;
  page?: number;
}

const searchRepositories = (data: GithubSearchRequest) => {
  return api.get<GithubSearchResponse>(`/search/repositories`, {
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
export type { GithubSearchResponse, GithubSearchItemsResponse };
