
<<<<<<< HEAD
<<<<<<< HEAD
import { Routes, Route, BrowserRouter } from 'react-router-dom';
=======
import { Routes, Route ,BrowserRouter } from 'react-router-dom';
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
import { Routes, Route ,BrowserRouter } from 'react-router-dom';
>>>>>>> apurbo


// Frontend page elements
import FrontendLayout from './components/frontend/FrontendLayout';
<<<<<<< HEAD
import FrontendHome from './components/frontend/page/Index';
import FrontendAbout from './components/frontend/page/About';


//Admin page elements
<<<<<<< HEAD
=======
import Home from './components/frontend/page/Index';
import About from './components/frontend/page/About';
import Rules from './components/frontend/page/rules';


//Admin page elements
>>>>>>> apurbo
import Error from './components/Error';
import BackendLayout from "./components/backend/layouts/BackendLayout";
import BackendAdmin from './components/backend/page/Admin';
import BackendSetting from './components/backend/page/Settings';
import SearchFile from './components/backend/page/SearchFile';
import UserList from './components/backend/page/UserList';

import RegistrationForm from './components/backend/auth/Registration';
import Login from './components/backend/auth/Login'
import Logout from './components/backend/auth/Logout';
<<<<<<< HEAD
import { useIsAuthenticated } from './components/backend/auth/authCheck';
=======
import BackendLayout from "./components/backend/BackendLayout";
import BackendAdmin from './components/backend/page/Admin';
import BackendSetting from './components/backend/page/Settings';


import Error from './components/Error';
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo




function App() {
<<<<<<< HEAD
<<<<<<< HEAD
  const isLoggedIn = useIsAuthenticated();
  console.log(isLoggedIn);


  return (
=======
  return(
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======



  return(
>>>>>>> apurbo
    <>
      <BrowserRouter>


        <Routes>

          {/* // Frontend page Routes */}

<<<<<<< HEAD
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

=======
          <Route path='/' exact element={<FrontendLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='copyright' element={<About/>}/>
            <Route path='rules' element={<Rules/>}/>

            <Route path='register' element={<RegistrationForm/>}/>
            <Route path='auth' element={<Login/>}/>
            <Route path='logout' element={<Logout/>}>

            </Route>
          </Route>


          

>>>>>>> apurbo
          {/* //Admin Routes */}

          <Route path='/admin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>
<<<<<<< HEAD
          </Route>


>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
            <Route path='searchFile' element={<SearchFile/>}/>
            <Route path='userList' element={<UserList/>}/>
            <Route path='bankbranchs' element={<UserList/>}/>
            <Route path='categories' element={<UserList/>}/>
            <Route path='attentions' element={<UserList/>}/>

          </Route>




          <Route path='/indexer' exact element={<BackendLayout/>}>


            <Route index element={<BackendAdmin/>}/>
            <Route path='preliminarilyApproved' element={<BackendSetting/>}/>

            <Route path='searchFile' element={<SearchFile/>}/>
            <Route path='userList' element={<UserList/>}/>
            <Route path='bankbranchs' element={<UserList/>}/>
            <Route path='categories' element={<UserList/>}/>
            <Route path='attentions' element={<UserList/>}/>

          </Route>






>>>>>>> apurbo
          {/* //Super Admin Routes */}

          {/* <Route path='/superAdmin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>

<<<<<<< HEAD
<<<<<<< HEAD
          </Route> */}


          <Route path='*' element={<Error />} />
=======

=======
>>>>>>> apurbo
          </Route> */}


          <Route path='*' element={<Error/>}/>
<<<<<<< HEAD
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
