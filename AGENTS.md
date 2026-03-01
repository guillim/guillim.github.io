# AGENTS.md

## Cursor Cloud specific instructions

This is a **Jekyll static blog** hosted on GitHub Pages using the Cayman theme. There is one service: the Jekyll dev server.

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
