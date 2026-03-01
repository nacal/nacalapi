const defaultQuery = `# nacal の個人情報 API です。
# 下の ▶ ボタンを押すと、プロフィール情報を取得できます。

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
</head>
<body style="margin:0;overflow:hidden;">
  <div id="graphiql" style="height:100vh;"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/graphiql@3.8.3/graphiql.min.js"></script>
  <script>
    const fetcher = GraphiQL.createFetcher({ url: '/graphql' });
    const root = ReactDOM.createRoot(document.getElementById('graphiql'));
    root.render(
      React.createElement(GraphiQL, {
        fetcher,
        defaultTabs: [{ query: ${JSON.stringify(defaultQuery)} }],
      })
    );
  </script>
</body>
</html>`;
