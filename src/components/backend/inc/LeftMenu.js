import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
<<<<<<< HEAD
=======


import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicIcon from '@mui/icons-material/Public';
import ListItemText from '@mui/material/ListItemText';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import HomeIcon from '@mui/icons-material/Home';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { useNavigate } from 'react-router-dom';
import {useAppStore} from "../../../appStore";

import FolderSharedIcon from '@mui/icons-material/FolderShared';

<<<<<<< HEAD
=======

import { useNavigate } from 'react-router-dom';
import {useAppStore} from "../../../appStore";
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function LeftMenu() {
<<<<<<< HEAD
<<<<<<< HEAD
  


=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
  


>>>>>>> apurbo
    const theme = useTheme();
    const navigate = useNavigate();
    const open = useAppStore((state)=> state.dopen);


 return (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo

      <Drawer variant="permanent" open={open}>
        
        <DrawerHeader>
            কপিরাইট অফিস 
<<<<<<< HEAD
=======
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          Copyrightoffice BD
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo

        <Divider />


        <List>

            <ListItem>

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FolderSharedIcon sx={{ marginLeft: '6px' }} />
                </ListItemIcon>

                <ListItemText    sx={{ opacity: open ? 1 : 0 }} >
                  <Box className='boxContainer'>
                  সুপার এ্যাডমিন <br/>
                  <span  style={{ fontSize: '12px' }} >

                    পরিচালক 
                  </span>
                  </Box>
                </ListItemText>
            </ListItem>

<<<<<<< HEAD
=======
        <Divider />
        <List>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/admin')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo
                <ListItemText  primary='ড্যাসবোর্ড'  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/admin/searchFile')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary='নথি সন্ধান '  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
<<<<<<< HEAD
=======
                <ListItemText primary='Home'  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>



          
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo

            <ListItem  disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate('/admin/settings')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SettingsApplicationsIcon />
                </ListItemIcon>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo
                <ListItemText primary='সেটিং'  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/admin/userList')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PersonSearchIcon />
                </ListItemIcon>
                <ListItemText primary='ইউজার '  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/admin/bankbranchs')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary='ব্যাংক শাখা '  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/admin/categories')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DynamicFeedIcon />
                </ListItemIcon>
                <ListItemText primary='ক্যাটাগরি'  sx={{ opacity: open ? 1 : 0 }} />
<<<<<<< HEAD
=======
                <ListItemText primary='Settings'  sx={{ opacity: open ? 1 : 0 }} />
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
              </ListItemButton>
            </ListItem>


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/admin/attentions')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MarkEmailUnreadIcon />
                </ListItemIcon>
                <ListItemText primary='এটেনশন বার্তা'  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('admin/analytics')}}>
<<<<<<< HEAD
=======
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/analytics')}}>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ErrorIcon />
                </ListItemIcon>
<<<<<<< HEAD
<<<<<<< HEAD
                <ListItemText primary='এরর'  sx={{ opacity: open ? 1 : 0 }} />
=======
                <ListItemText primary='Error'  sx={{ opacity: open ? 1 : 0 }} />
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
                <ListItemText primary='এরর'  sx={{ opacity: open ? 1 : 0 }} />
>>>>>>> apurbo
              </ListItemButton>
            </ListItem>

            
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PublicIcon />
                </ListItemIcon>
<<<<<<< HEAD
<<<<<<< HEAD
                <ListItemText primary='পাবলিক পেজ'  sx={{ opacity: open ? 1 : 0 }} />
=======
                <ListItemText primary='Public Page'  sx={{ opacity: open ? 1 : 0 }} />
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
                <ListItemText primary='পাবলিক পেজ'  sx={{ opacity: open ? 1 : 0 }} />
>>>>>>> apurbo
              </ListItemButton>
            </ListItem>


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo







<<<<<<< HEAD
=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
        </List>

      </Drawer>

    </Box>
  );
}