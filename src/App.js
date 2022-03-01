import './App.css';
import AppHeader from './modules/header/appHeader';
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import Login from './modules/login/login';
import Home from './modules/home/home';
import Registration from './modules/registration/registration';
import Profile from './modules/profile/profile';
import ProfileTab from './modules/profile/profileTab';

function App() {
  return (
   <Router>
      <div className="App">
        <AppHeader />
        <Routes>
        <Route path='/' element= {<Login />} />
        </Routes>
        <Routes>
        <Route path='/registeration' element={<Registration />} />
        </Routes>
        <Routes>
        <Route path='/home' element={<Home />} />
        </Routes>
        <Routes>
        <Route path='/profile' element={<Profile />} />
        </Routes>
        <Routes>
        <Route path='/profileTab' element={<ProfileTab />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
