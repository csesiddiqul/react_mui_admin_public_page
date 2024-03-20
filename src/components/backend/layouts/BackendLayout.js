import React, { useState } from 'react'
import Navbar from '../inc/Navbar';
import LeftMenu from "../inc/LeftMenu";
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material';

export default function BackendLayout() {


  const [openSidebar, setOpenSidebar] = useState(false);
  return (
      <>
        <div className='bgcolor' >
        <Box height={70}/>
        <Navbar setOpenSidebar={setOpenSidebar} />
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: {  sm: 'block', xs: openSidebar ? 'block':'none' } }}>
         
            <LeftMenu />
          </Box>
          <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <>
         
            <Outlet/>
          </>
          </Box>
        </Box>
        </div>
      </>
  )
}
