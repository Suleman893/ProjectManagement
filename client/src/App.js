import Client from "./components/Client";
import Header from "./components/Headers";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import CreateClientModal from "./components/CreateClientModal";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <CreateClientModal />
        <Client />
      </div>
    </ApolloProvider>
  );
}

export default App;
