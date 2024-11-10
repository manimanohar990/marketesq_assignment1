import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Clintdetails } from './Components/Clintdetails/Clintdetails';
import { Paymentdetails } from './Components/Paymentdetails/Paymentdetails';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clintdetails' element={<Clintdetails/>}/>
        <Route path='/payment' element={<Paymentdetails/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
