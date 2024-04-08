import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Routing from './components/routing';
 import Header from "./components/Header/Header"
import Routing from './components/routing';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className="App">
     <Header/>
     <Routing/>
     <Footer/>
    </div>
  );
}

export default App;
