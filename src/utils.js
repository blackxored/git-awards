import R from 'ramda';
import camelCase from 'lodash.camelcase';

export const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj))),
);

export const camelCaseKeys = mapKeys(camelCase);
