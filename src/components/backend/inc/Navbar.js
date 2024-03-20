import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useAppStore } from '../../../appStore';
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> apurbo


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const AppBar = styled(MuiAppBar, {
<<<<<<< HEAD
<<<<<<< HEAD
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 2,

}));
=======
=======
>>>>>>> apurbo
  })(({  theme }) => ({
    zIndex: theme.zIndex.drawer + 2,
    
  }));
<<<<<<< HEAD
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

<<<<<<< HEAD
<<<<<<< HEAD
export default function Navbar({ setOpenSidebar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const updateOpen = useAppStore((state) => state.updateOpen);
  const navigate = useNavigate();

  const dopen = useAppStore((state) => state.dopen || false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
=======
=======
>>>>>>> apurbo
export default function Navbar({setOpenSidebar}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const updateOpen = useAppStore((state)=> state.updateOpen);
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> apurbo

  const dopen = useAppStore((state)=> state.dopen || false);

  console.log(dopen)
<<<<<<< HEAD
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
    
>>>>>>> apurbo
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
<<<<<<< HEAD
<<<<<<< HEAD
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
=======
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
      <MenuItem onClick={()=>{navigate('/')}}>Log out</MenuItem>
>>>>>>> apurbo
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
<<<<<<< HEAD
<<<<<<< HEAD
          <Badge badgeContent={19} color="error">
=======
          <Badge badgeContent={17} color="error">
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
          <Badge badgeContent={19} color="error">
>>>>>>> apurbo
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
<<<<<<< HEAD
<<<<<<< HEAD
      <AppBar position="fixed" elevation={0} sx={{ background: "#ffffff", color: "#2f2f2f" }}>
=======
      <AppBar position="fixed" elevation={0} sx={{background:"#ffffff",color:"#2f2f2f"}}>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
      <AppBar position="fixed" elevation={0} sx={{background:"#ffffff",color:"#2f2f2f"}}>
>>>>>>> apurbo
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={() => { updateOpen(!dopen); setOpenSidebar(!dopen) }}
          >
            <MenuIcon />

=======
            onClick={()=>{updateOpen(!dopen);setOpenSidebar(!dopen)}}
          >
            <MenuIcon />
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
            onClick={()=>{updateOpen(!dopen);setOpenSidebar(!dopen)}}
          >
            <MenuIcon />

>>>>>>> apurbo
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
<<<<<<< HEAD
<<<<<<< HEAD
            sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '18px', fontWeight: 'bolde' }}
          >
            কপিরাইট অফিস

=======
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
            sx={{ display: { xs: 'none', sm: 'block' }  , fontSize:'18px' , fontWeight:'bolde'}}
          >
            কপিরাইট অফিস

>>>>>>> apurbo
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge badgeContent={19} color="error">
=======
              <Badge badgeContent={17} color="error">
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
              <Badge badgeContent={19} color="error">
>>>>>>> apurbo
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}