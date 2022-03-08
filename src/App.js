import './App.css';
import AppHeader from './modules/header/appHeader';
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import Login from './modules/login/login';
import Home from './modules/home/home';
import Registration from './modules/registration/registration';
import Profile from './modules/profile/profile';
import ProfileTab from './modules/profile/profileTab';
import Branch from './modules/branch/branch';
import BranchTab from './modules/branch/branchTab';
import Department from './modules/department/department';
import DepartmentTab from './modules/department/departmentTab';
import Designation from './modules/designation/designation';
import DesignationTab from './modules/designation/designationTab';
import Role from './modules/roles/role';
import RoleTab from './modules/roles/roleTab';
import Permission from './modules/permission/permission';
import PermissionTab from './modules/permission/permissionTab';
import User from './modules/user/user';
import UserTab from './modules/user/userTab';
import Group from './modules/group/group';
import GroupTab from './modules/group/groupTab';

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
        <Routes>
        <Route path='/branch' element={<Branch />} />
        </Routes>
        <Routes>
        <Route path='/branchTab' element={<BranchTab />} />
        </Routes>
        <Routes>
        <Route path='/department' element={<Department />} />
        </Routes>
        <Routes>
        <Route path='/departmentTab' element={<DepartmentTab />} />
        </Routes>
        <Routes>
        <Route path='/designation' element={<Designation />} />
        </Routes>
        <Routes>
        <Route path='/designationTab' element={<DesignationTab />} />
        </Routes>
        <Routes>
        <Route path='/role' element={<Role />} />
        </Routes>
        <Routes>
        <Route path='/roleTab' element={<RoleTab />} />
        </Routes>
        <Routes>
        <Route path='/permission' element={<Permission />} />
        </Routes>
        <Routes>
        <Route path='/permissionTab' element={<PermissionTab />} />
        </Routes>
        <Routes>
        <Route path='/user' element={<User />} />
        </Routes>
        <Routes>
        <Route path='/userTab' element={<UserTab />} />
        </Routes>
        <Routes>
        <Route path='/group' element={<Group />} />
        </Routes>
        <Routes>
        <Route path='/groupTab' element={<GroupTab />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
