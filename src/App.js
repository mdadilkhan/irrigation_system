import './App.css';
import Accounts from './Component/Accounts/Accounts';
import Home from './Component/Home/Home.js'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Machine from '../src/Component/Machine/Machine'


function App() {
  return (
     <>
       <BrowserRouter>
           <Routes>
              <Route path="/accounts" element={<Accounts/>}/>
              <Route path="/" element={<Home />} />
              <Route path="/control/:id" element={<Home />} />

           </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;
