
import { Routes, Route ,BrowserRouter } from 'react-router-dom';


// Frontend page elements
import FrontendLayout from './components/frontend/FrontendLayout';
import FrontendHome from './components/frontend/page/Index';
import FrontendAbout from './components/frontend/page/About';


//Admin page elements
import BackendLayout from "./components/backend/BackendLayout";
import BackendAdmin from './components/backend/page/Admin';
import BackendSetting from './components/backend/page/Settings';


import Error from './components/Error';




function App() {
  return(
    <>
      <BrowserRouter>


        <Routes>

          {/* // Frontend page Routes */}

          <Route path='/' exact element={<FrontendLayout/>}>
            <Route index element={<FrontendHome/>}/>
            <Route path='About' element={<FrontendAbout/>}/>
          </Route>

          {/* //Admin Routes */}

          <Route path='/admin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>
          </Route>


          {/* //Super Admin Routes */}

          {/* <Route path='/superAdmin' exact element={<BackendLayout/>}>
            <Route index element={<BackendAdmin/>}/>
            <Route path='settings' element={<BackendSetting/>}/>


          </Route> */}


          <Route path='*' element={<Error/>}/>


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
