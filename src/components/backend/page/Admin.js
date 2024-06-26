import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../../css/Dash.css';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AccordionDash from '../inc/AccordionDash';
import BarChart from '../../charts/Barchat';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PortraitIcon from '@mui/icons-material/Portrait';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { postApi } from '../../../service/ApiService';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';



export default function Admin() {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const [userData,setuserData] = useState();
  const handleClick = (event, path) => {
    event.preventDefault();


    navigate(path);

  };

  useEffect(() => {
    postApi("api/check", { name: "ok" }).then((res) => console.log(res)).catch(err => console.log('', err))
  }, [])




  useEffect(() => {
    const authUserString = localStorage.getItem("authUser");
    const role = localStorage.getItem("role");
    if (user === '' && authUserString) {
      try {
        const authUser = JSON.parse(authUserString);
        console.log(role);

        setuserData(authUser);
        if (authUser.email_verified_at === null) {
          // sendVerificationEmail(authUser.email);
          navigate('/otpSubmit');
        }
      } catch (error) {
        console.error("Error parsing authUserString:", error);
        // Handle parsing error as needed
      }
    }
  }, [user, navigate]);



  return (
    <>
      <div role="presentation" >
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            borderBottom: '0px solid',
            boxShadow: '0px 2px 4px rgb(33 72 80 / 42%)',
            padding: '10px 5px 5px 15px',
            marginBottom: '12px',
            borderRadius: '5px',
            background: '#ffff'
          }}
        >


          <Link
            underline="hover"
            color="inherit"
            href=""
            onClick={(event) => handleClick(event, '#')}
          >
            কপিরাইট অফিস
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
            onClick={(event) => handleClick(event, '/admin')}
          >
            ড্যাসবোর্ড
          </Link>
        </Breadcrumbs>

      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ width: '100%' }} className='gradient'>
                <CardContent>
                  <div className='iconStyle'>
                    <DriveFolderUploadIcon />
                  </div>

                  <Typography gutterBottom variant="h5" component="div" className='text-black'>
                    20,23
                  </Typography>
                  <Typography variant="body2" component="div" className='text-black' color="text.secondary">
                    আজকের আবেদন {userData?.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ width: '100%' }} className='gradientlight'>
                <CardContent>
                  <div className='iconStyle'>
                    <FolderOpenIcon />
                  </div>
                  <Typography gutterBottom variant="h5" component="div" className='text-black'>
                    300,123
                  </Typography>
                  <Typography variant="body2" component="div" className='text-black' color="text.secondary">
                    এ মাসের আবেদন
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Card sx={{ height: '78px', width: '100%' }} className='gradientlight'>
                <CardContent>
                  <Stack direction='row' spacing={2}>

                    <div className='iconStyle'>

                      <SaveAltIcon />

                    </div>

                    <div className='paddingAll'>
                      <span className='fileTitle'>
                        203
                      </span>
                      <br />
                      <span className='fileSubTitle' >
                        মোট ফাইল
                      </span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Card sx={{ height: '78px', width: '100%' }} className='gradient'>
                <CardContent>
                  <Stack direction='row' spacing={2}>

                    <div className='iconStyleblack'>
                      <PortraitIcon />
                    </div>

                    <div className='paddingAll'>
                      <span className='fileTitle'>
                        103
                      </span>
                      <br />
                      <span className='fileSubTitle'>
                        নতুন ব্যবহারকারী
                      </span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>

            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box height={20} />

      <Grid container spacing={2}>

        <Grid item xs={12} md={8}>
          <Stack direction="row" spacing={2}>

            <Card sx={{ width: '100%', padding: '30px 0px  10px 20px' }}>
              <BarChart />
            </Card>

          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <div className='paddingAll'>
                <span className='fileTitle' style={{ margin: '10px 10px 20px 10px', border: '1px' }}>
                  বর্তমান কার্যক্রম
                </span>
              </div>

              <AccordionDash />
            </CardContent>
          </Card>

        </Grid>

      </Grid>
    </>

  )
}
