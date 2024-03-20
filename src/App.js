
import { Routes, Route, BrowserRouter } from 'react-router-dom';


// Frontend page elements
import FrontendLayout from './components/frontend/FrontendLayout';
import FrontendHome from './components/frontend/page/Index';
import FrontendAbout from './components/frontend/page/About';


//Admin page elements
import Error from './components/Error';
import BackendLayout from "./components/backend/layouts/BackendLayout";
import BackendAdmin from './components/backend/page/Admin';
import BackendSetting from './components/backend/page/Settings';
import SearchFile from './components/backend/page/SearchFile';
import UserList from './components/backend/page/UserList';

import RegistrationForm from './components/backend/auth/Registration';
import Login from './components/backend/auth/Login'
import Logout from './components/backend/auth/Logout';
import { useIsAuthenticated } from './components/backend/auth/authCheck';




function App() {
  const isLoggedIn = useIsAuthenticated();
  console.log(isLoggedIn);


  return (
    <>
      <BrowserRouter>


        <Routes>

          {/* // Frontend page Routes */}

          <Route path='/' exact element={<FrontendLayout />}>
            <Route index element={<FrontendHome />} />

            <Route path='About' element={<FrontendAbout />} />
            <Route path='register' element={<RegistrationForm />} />
            <Route path='auth' element={<Login />} />
            <Route path='logout' element={<Logout />}>

            </Route>
          </Route>




          {/* //Admin Routes */}
          {isLoggedIn && (
            <Route path='/admin' exact element={<BackendLayout />}>
              <Route index element={<BackendAdmin />} />
              <Route path='settings' element={<BackendSetting />} />
              <Route path='searchFile' element={<SearchFile />} />
              <Route path='userList' element={<UserList />} />
              <Route path='bankbranchs' element={<UserList />} />
              <Route path='categories' element={<UserList />} />
              <Route path='attentions' element={<UserList />} />

            </Route>
          )}




          <Route path='/indexer' exact element={<BackendLayout />}>


            <Route index element={<BackendAdmin />} />
            <Route path='preliminarilyApproved' element={<BackendSetting />} />

            <Route path='searchFile' element={<SearchFile />} />
            <Route path='userList' element={<UserList />} />
            <Route path='bankbranchs' element={<UserList />} />
            <Route path='categories' element={<UserList />} />
            <Route path='attentions' element={<UserList />} />

          </Route>






          {/* //Super Admin Routes */}

          {/* <Route path='/superAdmin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>

          </Route> */}


          <Route path='*' element={<Error />} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
