# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm ci
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Preview Deployments

Pull requests automatically generate preview deployments using Netlify. To enable this feature, you need to configure the following repository secrets:

- `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
- `NETLIFY_SITE_ID`: The site ID from your Netlify site settings

### Setting up Netlify for previews:

1. Create a [Netlify account](https://app.netlify.com/signup) if you don't have one
2. Create a new site (you can use manual deploy initially)
3. Get your site ID from Site settings → General → Site details
4. Generate a personal access token from User settings → Applications → Personal access tokens
5. Add both values as secrets in your GitHub repository settings
