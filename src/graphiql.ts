const defaultQuery = `# Hello, World! This is nacalapi — a personal API by nacal.
# Getting started: just press ▶ to run your first query.

{
  profile {
    name
    bio
    avatarUrl
    links {
      label
      url
    }
  }
}`;

export const graphiqlHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>nacalapi</title>
  <link rel="stylesheet" href="https://unpkg.com/graphiql@3.8.3/graphiql.min.css" />
  <link rel="stylesheet" href="https://unpkg.com/@graphiql/plugin-explorer@4.0.0-alpha.3/dist/style.css" />
</head>
<body style="margin:0;overflow:hidden;">
  <div id="graphiql" style="height:100vh;"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/graphiql@3.8.3/graphiql.min.js"></script>
  <script crossorigin src="https://unpkg.com/@graphiql/plugin-explorer@4.0.0-alpha.3/dist/index.umd.js"></script>
  <script>
    const fetcher = GraphiQL.createFetcher({ url: '/graphql' });
    const explorer = GraphiQLPluginExplorer.explorerPlugin();
    const root = ReactDOM.createRoot(document.getElementById('graphiql'));
    root.render(
      React.createElement(GraphiQL, {
        fetcher,
        defaultTabs: [{ query: ${JSON.stringify(defaultQuery)} }],
        plugins: [explorer],
      })
    );
  </script>
</body>
</html>`;
