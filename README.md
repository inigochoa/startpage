# Startpage

A simple but customizable startpage.

![Startpage demo image](../media/startpage.png?raw=true)

## Installation

```sh
git clone https://github.com/inigochoa/startpage
```

### Running locally

```sh
yarn install
yarn dev
```

And visit <http://localhost:8080/>.

## Configuration

Configuration is done via *src/_data* files.

Open *extension.js* to set:

- Author
- Description
- Name and shortname
- Version

Open *site.js* to set:

- Site title and description
- Timezone
- Base URL
- Search engine
- Lists of links

## Deployment

Startpage supports various deployment methods.

### Docker

```sh
docker run -p 8080:8080 -v ./site.js:/usr/src/app/src/_data/site.js inigochoa/startpage
```

### Docker compose

```yaml
version: '3.7'

services:
  startpage:
    container_name: startpage
    image: inigochoa/startpage:latest
    ports:
      - 8080:8080
    restart: unless-stopped
    volumes:
      - ./data/site.js:/usr/src/app/src/_data/site.js
```

### Static site

```sh
yarn prod
```

And your static startpage will be saved into *_site* folder.

### Browser extension

Before loading the extension, fill in the *src/_data/extension.js* fields.

#### Chrome

1. Generate the static site with `yarn prod`.
1. Go to Settings > Extensions.
1. Enable **Developer mode**.
1. Click on **Load unpacked**.
1. Select the *_site* folder.

#### Firefox

1. Generate the artifact with `yarn build`.
2. Go to <https://addons.mozilla.org/es/developers/addons>.
3. Send a new extension or upload a version for an existing one.

## Inspiration

This project was inspired by <https://github.com/deepjyoti30/startpage>.

## License

This project is [MIT] licensed.

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page]. You can also take a look at the
[contributing guide].

[MIT]: https://github.com/inigochoa/startpage/blob/main/LICENSE.md
[issues page]: https://github.com/inigochoa/startpage/issues
[contributing guide]: https://github.com/inigochoa/startpage/blob/main/CONTRIBUTING.md
