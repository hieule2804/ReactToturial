import './App.scss';
import Header from './component/header/header';
import { Link } from "react-router-dom";

function App() {
  return (

    <div className="App-container">
      <Header />
      <div>test link
        <div>
          <button>
            <Link to={`/admin`}>Go To Admin Page</Link>
          </button>
          <button>
            <Link to={`/user`}>Go To User Page</Link>
          </button>
        </div>

      </div>
    </div>
  );
}
export default App;
