import Client from "./components/Client";
import Header from "./components/Headers";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <Client />
      </div>
    </ApolloProvider>
  );
}

export default App;
