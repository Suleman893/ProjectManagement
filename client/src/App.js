import Header from "./components/Headers";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    url: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
