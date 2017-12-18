import { back } from 'nock';
import {
  getUser,
  getTopUsers,
  getRankForLanguage,
  getUserBestRankWorldwide,
} from '../api';

back.fixtures = `${__dirname}/__fixtures__/`;
back.setMode('lockdown');

describe('api', () => {
  describe('.getUser', () => {
    it('gets a user by username', async done => {
      back('blackxored.json', async nockDone => {
        const user = await getUser('blackxored');
        expect(user).toMatchSnapshot();

        nockDone();
        done();
      });
    });
  });

  describe('.getRankForLanguage', () => {
    it('returns a specific rank for a language', done => {
      back('blackxored.json', async nockDone => {
        const result = getRankForLanguage(
          'javascript',
          await getUser('blackxored'),
        );
        expect(result).toMatchSnapshot();

        nockDone();
        done();
      });
    });
  });

  describe('.getUserBestRankWorldwide', () => {
    it('returns the rank where the user is best-ranked worlwide', done => {
      back('blackxored.json', async nockDone => {
        const result = getUserBestRankWorldwide(await getUser('blackxored'));

        expect(result.language).toEqual('ruby');

        nockDone();
        done();
      });
    });
  });

  describe('.getTopUsers', () => {
    it('returns the list of top users', done => {
      back('top-users.json', async nockDone => {
        const result = await getTopUsers();
        expect(result).toMatchSnapshot();

        expect(result[0].login).toEqual('freecodecamp');

        nockDone();
        done();
      });
    });
  });
});
