import logo from './logo.svg';
import './App.css';
import Displayflight from './components/displayflight';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './components/userlogin';
import SignupForm from './components/signup';
import AdminLoginPage from './components/adminlogin';
import Mybooking from './components/mybooking';
import { Auth } from './components/Authentication';
import AdminPanel from './components/AdminPanel';
import BookedYet from './components/BookedYet';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/adminlogin' element={<AdminLoginPage/>}></Route>
      <Route path='/admin' element={<AdminPanel/>}></Route>
      <Route path='/bookedyet' element={<BookedYet/>}></Route>

        <Route path='/signup' element={<SignupForm/>}></Route>
        <Route path='/display' element={<Auth><Displayflight/></Auth>}></Route>
        <Route path='/mybooking' element={<Auth><Mybooking/></Auth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
