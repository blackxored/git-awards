// @flow
import type { User, UserItem, Ranking } from './types';
import axios from 'axios';
import {
  compose,
  curry,
  find,
  head,
  lensProp,
  map,
  prop,
  propEq,
  memoize,
  set,
  sortBy,
  view,
} from 'ramda';
import { camelCaseKeys } from './utils';

const instance = axios.create({
  baseURL: 'http://git-awards.com/api/v0',
  responseType: 'json',
});

const returnData = prop('data');
const rankings = lensProp('rankings');
const transformUser = compose(
  user => set(rankings, map(camelCaseKeys, view(rankings, user), user), user),
  camelCaseKeys,
);

/**
 * Return a specific user's rankings by username
 */
export const getUser = (username: string): Promise<User> =>
  instance
    .get(`/users/${username}`)
    .then(compose(transformUser, prop('user'), returnData));

/**
 * Return the top users
 */
export const getTopUsers = (): Promise<UserItem[]> =>
  instance
    .get('/users')
    .then(returnData)
    .then(prop('users'));

/**
 * Returns a ranking for a specified language
 */
export const getRankForLanguage = (language: string, user: User): Ranking =>
  find(propEq('language', language), user.rankings);

const sortByProp = curry((propName, xs) => sortBy(prop(propName), xs));

/**
 * Get the best ranked language for a given user
 */
export const getUserBestRankWorldwide = memoize(user =>
  head(sortByProp('worldRank', user.rankings)),
);
