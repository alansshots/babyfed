import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Steps from './components/Steps';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Steps/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
