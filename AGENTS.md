# AGENTS.md

## Cursor Cloud specific instructions

This is a **Jekyll website** hosted on GitHub Pages using the Cayman theme. There is one service: the Jekyll dev server. The site has **two distinct parts**:

1. **Blog** — developer notes on JavaScript, Python, Docker, DevOps, etc.
   - Posts live in `_posts/` as Markdown files (naming: `YYYY-MM-DD-slug.markdown` or `.md`).
   - Layout: `_layouts/blog.html`. The homepage (`index.md`) lists all posts.
2. **Portfolio** — a listing of products the owner builds and maintains.
   - Product data is in `_data/projects.yml` (title, description, url, picture, stars, active flag).
   - The portfolio page is `about.md` (route: `/about`), layout: `_layouts/about.html`. It loops over `site.data.projects` and renders cards for active products.
   - Individual product pages can exist as a Jekyll collection in `_products/` (configured in `_config.yml` under `collections.products`, permalink `/products/:name`). Example: `_products/paul.md`.

Depending on the task, you may be working on either part — or both.

### Running the dev server

```
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

The server supports auto-regeneration; editing posts or layouts triggers a rebuild automatically.

### Building

```
bundle exec jekyll build
```

Output goes to `_site/`. This directory is `.gitignore`d.

### Key caveats

- **Bundler path**: Gems are installed to `vendor/bundle` (configured via `.bundle/config`). Use `bundle exec` to run Jekyll commands.
- **No Gemfile.lock committed**: `Gemfile.lock` is in `.gitignore`. `bundle install` resolves dependencies fresh each time.
- **Liquid warnings**: The build emits two harmless Liquid syntax warnings from `about.md` — these are cosmetic and do not affect the site.
- **GitHub Metadata warning**: `GitHub Metadata: No GitHub API authentication could be found` is expected in local dev and does not break anything.
- **No linter or test suite**: This repo has no automated tests or lint commands. Validate changes by running `bundle exec jekyll build` (exit code 0 = success) and visually inspecting the dev server.
- **Ruby**: The VM snapshot has Ruby 3.2 (system apt package) with bundler installed via `sudo gem install bundler`.
