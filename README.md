# Kaushika Wijerathne — Portfolio

Source for [kaywijerathne.com](https://kaywijerathne.com), a dependency-free,
single-page portfolio focused on accessibility, HCI, multimodal AI, games, and writing.

## Structure

The deployable site lives in `site/` and contains semantic HTML, one CSS file,
and no runtime JavaScript or external dependencies.

## Local preview

```powershell
python -m http.server 4173 --directory site
```

Open [http://localhost:4173](http://localhost:4173).

## Deployment

Pushes to `main` upload `site/` directly to GitHub Pages. There is no build step.
