# git-awards

> Discover your ranking on GitHub

[![Semantically Released][semantic-release-badge]][semantic-release]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Styled with Prettier][prettier-badge]][prettier]
[![AirBnB style guide][airbnb-style-badge]][airbnb-style]

[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

JavaScript client for Git Awards (http://git-awards.com), discover you GitHub ranking

## Installing / Getting Started

```
npm install git-awards // most likely, yarn instead
```

```javascript
import { getUser, getRankForLanguage } from 'git-awards';
// Or with CommonJS:
// const { getUser, getRankForLanguage } = require('git-awards');

getUser('<your-username>')
  .then(user => getRankForLanguage('<your-language>', user))
  .then(console.log.bind(console));
```

For usage details see the [documentation].

## Developing

### Built With

* Axios
* Ramda

### Pre-requisites

### Setting up Dev

Here's a brief intro about what a developer must do in order to start 
developing the project further:

```shell
git clone https://github.com/blackxored/git-awards
cd git-awards
yarn
```

### Building

Build CommonJS modules, documentation and more, with:

```shell
yarn build
```

## Versioning

We use [SemVer][semver] for versioning. In addition, it's automatic via
[semantic-release][semantic-release], and our [commit convention][commit-convention].

For the versions available, see the [Releases][releases] on this repository.

## Tests

```shell
yarn test
```

## Style guide

We base our code style on [AirBnB's style guide][airbnb-style] and we check with 
[ESLint][eslint] and automatically format our code with [Prettier][prettier].

## API Reference

See the API reference in the [documentation].

## License

This project is licensed under the MIT License - see the 
[license] file for details.

## Acknowledgments 

* [Git Awards](http://git-awards.com) for providing such an awesome site.

## Contributing

If you're interested in contributing to this project in any form, please read
our [Contribution Guidelines][contributing].

### Code of Conduct

We've adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][coc] so that you can understand what actions 
will and will not be tolerated.

### Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/133308?v=4" width="100px;"/><br /><sub><b>Adrian Perez</b></sub>](https://adrianperez.codes)<br />[💻](https://github.com/blackxored/git-awards/commits?author=blackxored "Code") [📖](https://github.com/blackxored/git-awards/commits?author=blackxored "Documentation") [🚇](#infra-blackxored "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/blackxored/git-awards/commits?author=blackxored "Tests") | [<img src="https://avatars3.githubusercontent.com/u/498298?v=4" width="100px;"/><br /><sub><b>vincent daubry</b></sub>](http://www.youboox.fr)<br />[🚇](#infra-vdaubry "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/blackxored/git-awards.svg?style=flat-square
[build]: https://travis-ci.org/blackxored/git-awards
[coverage-badge]: https://img.shields.io/codecov/c/github/blackxored/git-awards.svg?style=flat-square
[coverage]: https://codecov.io/github/blackxored/git-awards
[version-badge]: https://img.shields.io/npm/v/git-awards.svg?style=flat-square
[package]: https://www.npmjs.com/package/git-awards
[downloads-badge]: https://img.shields.io/npm/dm/git-awards.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/git-awards
[license-badge]: https://img.shields.io/npm/l/git-awards.svg?style=flat-square
[license]: https://github.com/blackxored/git-awards/blob/master/LICENSE.md
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier 
[airbnb-style-badge]: https://img.shields.io/badge/code%20style-airbnb-green.svg?style=flat-square
[airbnb-style]: https://github.com/airbnb/javascript
[eslint]: http://eslint.org 
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[contributing]: https://github.com/blackxored/git-awards/blob/master/CONTRIBUTING.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/blackxored/git-awards/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/blackxored/git-awards.svg?style=social
[github-watch]: https://github.com/blackxored/git-awards/watchers
[github-star-badge]: https://img.shields.io/github/stars/blackxored/git-awards.svg?style=social
[github-star]: https://github.com/blackxored/git-awards/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20git-awards%20by%20%40blackxored%20https%3A%2F%2Fgithub.com%2Fblackxored%2Fgit-awards%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/blackxored/git-awards.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[semver]: http://semver.org/
[releases]: https://github.com/blackxored/git-awards/releases
[commit-convention]: https://www.npmjs.com/package/@commitlint/config-conventional
[documentation]: https://blackxored.github.io/git-awards
