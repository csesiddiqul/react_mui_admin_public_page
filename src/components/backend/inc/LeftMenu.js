import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from "../../../appStore";

import FolderSharedIcon from '@mui/icons-material/FolderShared';

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
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state)=> state.dopen);

  // Define role permissions
  const rolePermissions = {
    'Super Admin': ['/', '/admin', '/admin/settings', '/admin/searchFile', '/admin/userList', '/admin/bankbranchs', '/admin/categories', '/admin/attentions', '/admin/analytics'],
    'Admin': ['/', '/admin', '/admin/settings', '/admin/searchFile', '/admin/userList'],
    // Add more roles and their permitted routes as needed
  };


  const userRoleString = localStorage.getItem("role");
  const userRolejs = JSON.parse(userRoleString);
  const userRole = userRolejs.name;


  return (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        
        <DrawerHeader>
            কপিরাইট অফিস 
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />


        <List>
          {menuItems.map((item) => (
            // Check if the user's role has permission to access the current item
            rolePermissions[userRole]?.includes(item.path) && (
              <ListItem key={item.text} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item.path)}>
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
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          ))}
        </List>

      </Drawer>

    </Box>
  );
}

const menuItems = [
  { text: 'ড্যাসবোর্ড', path: '/admin', icon: <HomeIcon /> },
  { text: 'নথি সন্ধান', path: '/admin/searchFile', icon: <SearchIcon /> },
  { text: 'সেটিং', path: '/admin/settings', icon: <SettingsApplicationsIcon /> },
  { text: 'ইউজার', path: '/admin/userList', icon: <PersonSearchIcon /> },
  { text: 'ব্যাংক শাখা', path: '/admin/bankbranchs', icon: <AccountBalanceIcon /> },
  { text: 'ক্যাটাগরি', path: '/admin/categories', icon: <DynamicFeedIcon /> },
  { text: 'এটেনশন বার্তা', path: '/admin/attentions', icon: <MarkEmailUnreadIcon /> },
  { text: 'এরর', path: '/admin/analytics', icon: <ErrorIcon /> },
  { text: 'পাবলিক পেজ', path: '/', icon: <PublicIcon /> },
];
