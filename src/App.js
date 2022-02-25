import './App.css';
import AppHeader from './modules/header/appHeader';
import SideNav from './modules/header/sideNav';
// import Buttons from './components/Buttons/Buttons';
// import Users from './components/Users/UsersComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Hai</p>
        <Buttons />
        <p>{process.env.REACT_APP_BASE_URL}</p>
      </header>
      <Users /> */}
      <AppHeader />
      <SideNav />
    </div>
  );
}

export default App;
