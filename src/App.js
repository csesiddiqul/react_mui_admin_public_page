
<<<<<<< HEAD
import { Routes, Route, BrowserRouter } from 'react-router-dom';
=======
import { Routes, Route ,BrowserRouter } from 'react-router-dom';
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77


// Frontend page elements
import FrontendLayout from './components/frontend/FrontendLayout';
import FrontendHome from './components/frontend/page/Index';
import FrontendAbout from './components/frontend/page/About';


//Admin page elements
<<<<<<< HEAD
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
=======
import BackendLayout from "./components/backend/BackendLayout";
import BackendAdmin from './components/backend/page/Admin';
import BackendSetting from './components/backend/page/Settings';


import Error from './components/Error';
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77




function App() {
<<<<<<< HEAD
  const isLoggedIn = useIsAuthenticated();
  console.log(isLoggedIn);


  return (
=======
  return(
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
    <>
      <BrowserRouter>


        <Routes>

          {/* // Frontend page Routes */}

<<<<<<< HEAD
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






=======
          <Route path='/' exact element={<FrontendLayout/>}>
            <Route index element={<FrontendHome/>}/>
            <Route path='About' element={<FrontendAbout/>}/>
          </Route>

          {/* //Admin Routes */}

          <Route path='/admin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>
          </Route>


>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
          {/* //Super Admin Routes */}

          {/* <Route path='/superAdmin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>

<<<<<<< HEAD
          </Route> */}


          <Route path='*' element={<Error />} />
=======

          </Route> */}


          <Route path='*' element={<Error/>}/>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
