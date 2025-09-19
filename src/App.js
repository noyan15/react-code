import React from 'react';
import './App.css';
import StudentBox from './components/StudentBox';

function App() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
      <main>
        <form>
          <label>Student Name</label>
          <input type="text" placeholder="Enter your name" />
          <br />
          <label>Age</label>
          <input type="number" placeholder="Enter your age" />
          <br />
          <label>City</label>
          <input type="text" placeholder="Enter your city" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
      <footer>
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
