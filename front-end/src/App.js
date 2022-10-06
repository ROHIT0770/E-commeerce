
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponents';
import Login from './components/Login';
import Addproducts from './components/Addproducts';
import Productlist from './components/Productlist';
import Updateproducts from './components/updateproduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>

      <Route element ={<PrivateComponent />} >
        <Route path="/" element={<Productlist />} />
        <Route path="/add" element={<Addproducts />} />
        <Route path="/update/:id" element={<Updateproducts />} />
        <Route path="/logout" element={<h1>logout Listing Component</h1>} />
        <Route path="/profile" element={<h1> profile Component</h1>} />
        </Route>
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
} 

export default App;
