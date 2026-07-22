# Gyujin Choi — CV

Source for my online CV, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages via GitHub Actions.

**Live site:** https://graphicscgj.github.io/gyujin-cv/

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve      # http://127.0.0.1:8000
```

## Layout

- `docs/` — site content (Markdown)
- `mkdocs.yml` — site config & navigation
- `latex/` — LaTeX source of the printable CV (CurVe template)
- `.github/workflows/deploy.yml` — build & deploy to Pages on every push to `main`
