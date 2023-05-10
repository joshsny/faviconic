<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/joshsny/faviconic">
    <img src="https://i.ibb.co/N33NmB2/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Faviconic</h3>
  <p align="center">
    Get any logo from a domain.
    <br />
    <br />
    <img src="https://img.shields.io/github/stars/joshsny/faviconic.svg?style=for-the-badge">
    <img src="https://img.shields.io/github/license/joshsny/faviconic.svg?style=for-the-badge">
    <br />
    <a href="https://script.google.com/d/1292oAlLR3zBW8f5XyI1RwTyX2kDFWCShwka_aRRhD43nyFPXB8EjA5r1/edit?usp=sharing"><b>View Demo</b></a>
    ·
    <a href="https://github.com/joshsny/faviconic/issues"><b>Report Bug</b></a>
  </p>
</p>

<!-- GETTING STARTED -->

Favicon gets icons for any domain name.
## Getting Started

To start using Faviconic install it using `npm` or `yarn`.

`yarn add faviconic`

or

`npm install faviconic --save`

<!-- USAGE EXAMPLES -->

## How to use Faviconic


Faviconic is very simple to use. Just import the `getIcon` function and you are good to go.

```js
import { getIcon } from "faviconic"

const { url } = getIcon("yahoo.com"); // just the domain

const { url } = getIcon("https://yahoo.com") // with the protocol

const { url, size } = getIcon("yahoo.com") // with icon size

// size: { width: 512, height: 512 }
```


## Configuration


<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Joshua Snyder - [@joshsny](https://twitter.com/joshsny) - [LinkedIn](https://linkedin.com/in/joshsny)


<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/joshsny/faviconic.svg?style=for-the-badge
[contributors-url]: https://github.com/joshsny/faviconic/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/joshsny/faviconic.svg?style=for-the-badge
[forks-url]: https://github.com/joshsny/faviconic/network/members
[stars-shield]: https://img.shields.io/github/stars/joshsny/faviconic.svg?style=for-the-badge
[stars-url]: https://github.com/joshsny/faviconic/stargazers
[issues-shield]: https://img.shields.io/github/issues/joshsny/faviconic.svg?style=for-the-badge
[issues-url]: https://github.com/joshsny/faviconic/issues
[license-shield]: https://img.shields.io/github/license/joshsny/faviconic.svg?style=for-the-badge
[license-url]: https://github.com/joshsny/faviconic/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/joshsny


