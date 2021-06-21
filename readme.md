# 💧 plop generator react component

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_A [`plop`][plop] generator for [`react`][react] components._

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install --save-dev @bradgarropy/plop-generator-react-component
```

## 🥑 Usage

First, be sure you have [`plop`][plop] installed. Then, add the following line to your `plopfile.js`.

```javascript
plop.load("@bradgarropy/plop-generator-react-component")
```

Now you'll have access to the `component` generator as shown below.

```bash
plop component
```

The `component` generator scaffolds a component, including tests and an associated css module. The resulting directory looks like this for a component named `Component`.

```text
src
└── components
   └── Component
      ├── index.ts
      ├── Component.tsx
      ├── Component.test.tsx
      └── Component.module.css
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/plop-generator-react-component/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/plop-generator-react-component/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/plop-generator-react-component/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/bradgarropy/plop-generator-react-component
[contributing]: https://github.com/bradgarropy/plop-generator-react-component/blob/master/contributing.md
[contributors]: #-contributors
[npm]: https://www.npmjs.com/package/@bradgarropy/plop-generator-react-component
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/plop-generator-react-component?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/plop-generator-react-component.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/plop-generator-react-component?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/plop-generator-react-component?style=flat-square
[issues]: https://github.com/bradgarropy/plop-generator-react-component/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/plop-generator-react-component
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/plop-generator-react-component?style=flat-square
[github-actions]: https://github.com/bradgarropy/plop-generator-react-component/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/plop-generator-react-component/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fplop-generator-react-component
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/plop-generator-react-component?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[plop]: https://plopjs.com
[react]: https://reactjs.org
