
  # Redesign Trois Mousquetaire Site

  This is a code bundle for Redesign Trois Mousquetaire Site. The original project is available at https://www.figma.com/design/lS8M2swQecYwN54JtC3KSE/Redesign-Trois-Mousquetaire-Site.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy-pages.yml` that builds and deploys the site on every push to `main` or `master`.

1. Push your code to GitHub.
2. In your GitHub repo, go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` (or run the workflow manually from the `Actions` tab).

After deployment, your site will be available at:
- `https://<username>.github.io/<repository>/` (project repo), or
- `https://<username>.github.io/` (if repository name ends with `.github.io`).
  