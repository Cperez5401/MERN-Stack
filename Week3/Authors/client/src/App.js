import "./App.css";
import { Link, Redirect, Router } from "@reach/router";
import Author from "./views/Author";
import Authors from "./views/Authors";
import EditAuthor from "./views/EditAuthor";
import NewAuthor from "./views/NewAuthor";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/author'>Authors</Link>{' '}
        <Link to='/author/new'>New Author</Link>
        <hr/>
      </nav>
      <Router>
        <Redirect from='/' to='/author' noThrow='true'/>
        <Authors path="/author" />
        <Author path="/author/:id" />
        <NewAuthor path="/author/new" />
        <EditAuthor path="/author/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
