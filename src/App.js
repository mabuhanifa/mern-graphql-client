import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";
import Header from "./components/assets/Header";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <Header />
      <div className="container">hello</div>
    </>
  );
}

export default App;
