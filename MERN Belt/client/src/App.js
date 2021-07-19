import './App.css';
import { Redirect, Router } from "@reach/router";
import Pets from './views/Pets';
import Pet from './views/Pet';
import EditPet from './views/EditPet';
import NewPet from './views/NewPet';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to='/pet'>Authors</Link>{' '}
        <Link to='/pet/new'>New Author</Link>
        <hr/>
      </nav> */}
      <Router>
        <Redirect from="/" to="/pets" noThrow="true"/>
        <Pets path="/pets" />
        <Pet path="/pet/:id" />
        <NewPet path="/pet/new" />
        <EditPet path="/pet/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
