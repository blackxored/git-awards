// @flow
export type Ranking = {
  cityRank: number | null,
  countryRank: number | null,
  starsCount: number,
  worldRank: number,
};

export type RankingDetail = {
  cityCount: number,
  countryCount: number,
  language: string,
  repositoryCount: number,
  worldCount: number,
} & Ranking;

export type UserItem = {
  +id: number,
  +login: string,
  +gravatarUrl: string,
  city: string | null,
  country: string | null,
} & Ranking;

export type User = {
  rankings: Ranking[],
} & UserItem;
