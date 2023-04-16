//import logo from './logo.svg';
import './Style.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Userlist from './Component/Userlist';
import Adduser from './Component/Adduser';
import Edituser from './Component/Edituser';
import Addproduct from './Component/Addproduct';
import Productlist from './Component/Productlist';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element= { <Home/> } />
      <Route path="/userlist" element= { <Userlist/> } />
      <Route path="/adduser" element= { <Adduser/> } />
      <Route path="/edituser/:id" element= { <Edituser/> } />
      <Route path="/addproduct/" element= { <Addproduct/> } />
      <Route path="/productlist/" element= { <Productlist/> } />

      </Routes>
      <Footer/>    
 </div>
  );
}

export default App;
