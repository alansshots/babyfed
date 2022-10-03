import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Register/>
    </div>
  );
}

export default App;
