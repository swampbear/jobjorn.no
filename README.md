# jobjorn.no

Personal homepage built with Hugo and deployed via GitHub Pages.

## Development

### Prerequisites
- Install [Hugo](https://gohugo.io/installation/) (extended version recommended)

### Local Development
```bash
hugo server -D
```

Visit http://localhost:1313 to view the site.

## Build

```bash
hugo
```

The static site will be generated in the `public/` directory.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Setup GitHub Pages
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to main branch to trigger deployment

## License

See [LICENSE](LICENSE) file.
