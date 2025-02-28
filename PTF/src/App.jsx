import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="bg-gray-200 p-4 h-full w-full">
      <nav>
        <ul className = "flex gap-2 border-2 p-2 justify-between rounded-2xl">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;