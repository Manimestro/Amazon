import './App.css';
import Header from './Header';
import Home from './Home';
import Basket from './Basket';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Notes from './Notes';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/class' element={<Notes/>} />
          <Route path='/Basket' element={<Basket/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes>
      </Router> 
    </div>
  );
}
export default App;
