import React, { useState } from 'react'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../../css/Dash.css';
<<<<<<< HEAD
=======
import SourceIcon from '@mui/icons-material/Source';
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AccordionDash from '../inc/AccordionDash';
import BarChart from '../../charts/Barchat';
<<<<<<< HEAD
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PortraitIcon from '@mui/icons-material/Portrait';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';




export default function Admin() {
  const navigate = useNavigate(); 

  const handleClick = (event, path) => {
    event.preventDefault();

    console.log(path);

    navigate(path);
    
  };
 
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
=======

export default function Admin() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
      <>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
<<<<<<< HEAD
              <Card sx={{  width: '100%' }} className='gradient'>
=======
              <Card sx={{ height: '30vh', width: '100%' }} className='gradient'>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                <CardContent>
                  <div className='iconStyle'> 
                    <DriveFolderUploadIcon/>
                  </div>

<<<<<<< HEAD
                  <Typography gutterBottom variant="h5" component="div" className='text-black'>
                   20,23
                  </Typography>
                  <Typography variant="body2" component="div"  className='text-black'  color="text.secondary">
                    আজকের আবেদন
=======
                  <Typography gutterBottom variant="h5" component="div"  sx={{color:'#ffffff'}}>
                    200,12
                  </Typography>
                  <Typography variant="body2" component="div" sx={{color:'#ccd1e1'}} color="text.secondary">
                      This Month File
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
<<<<<<< HEAD
                <Card sx={{ width: '100%' }} className='gradientlight'>
=======
                <Card sx={{ height: '30vh', width: '100%' }} className='gradientlight'>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                  <CardContent>
                    <div className='iconStyle'>
                      <FolderOpenIcon/>
                    </div>
<<<<<<< HEAD
                    <Typography gutterBottom variant="h5" component="div" className='text-black'>
                      300,123
                    </Typography>
                    <Typography variant="body2" component="div" className='text-black'  color="text.secondary">
                      এ মাসের আবেদন
=======
                    <Typography gutterBottom variant="h5" component="div"  sx={{color:'#ffffff'}}>
                      300,123
                    </Typography>
                    <Typography variant="body2" component="div" sx={{color:'#ccd1e1'}} color="text.secondary">
                        Total File
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
<<<<<<< HEAD
            <Card sx={{ height: '78px', width: '100%' }} className='gradientlight'>
=======
            <Card sx={{ height: '14vh', width: '100%' }} className='gradientlight'>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
              <CardContent>
                <Stack direction='row' spacing={2}>

                    <div className='iconStyle'>
<<<<<<< HEAD
                     
                      <SaveAltIcon/>
                      
=======
                      <SourceIcon/>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                    </div>

                    <div className='paddingAll'>
                      <span className='fileTitle'>
                        203
                      </span>
                    <br/>
                      <span className='fileSubTitle' >
<<<<<<< HEAD
                        মোট ফাইল
=======
                        Total File
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                      </span>
                    </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
<<<<<<< HEAD
            <Card sx={{ height: '78px', width: '100%'}} className='gradient'> 
=======
            <Card sx={{ height: '14vh', width: '100%'}}>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
              <CardContent>
                  <Stack direction='row' spacing={2}>

                      <div className='iconStyleblack'>
<<<<<<< HEAD
                        <PortraitIcon/>
=======
                        <SourceIcon/>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                      </div>

                      <div className='paddingAll'>
                        <span className='fileTitle'>
<<<<<<< HEAD
                          103
                        </span>
                      <br/>
                        <span className='fileSubTitle'>
                          নতুন ব্যবহারকারী
=======
                          2003
                        </span>
                      <br/>
                        <span className='fileSubTitle'>
                          File
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
                        </span>
                      </div>
                  </Stack>
                </CardContent>
            </Card>

          </Grid>
          </Grid>
        </Grid>
        </Grid>

        <Box height={20}/>

        <Grid container spacing={2}>

        <Grid item xs={12} md={8}>
          <Stack direction="row" spacing={2}>

<<<<<<< HEAD
            <Card sx={{  width: '100%', padding:'30px 0px  10px 20px'}}>
=======
            <Card sx={{ height: '50vh', width: '100%', padding:'30px 0px  10px 20px'}}>
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
              <BarChart />
            </Card>

          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
<<<<<<< HEAD
          <Card sx={{  width: '100%' }}>
            <CardContent>
            <div className='paddingAll'>
              <span className='fileTitle' style={{margin:'10px 10px 20px 10px' , border:'1px'}}>
                বর্তমান কার্যক্রম
=======
          <Card sx={{ height: '60vh', width: '100%' }}>
            <CardContent>
            <div className='paddingAll'>
              <span className='fileTitle'>
              Most Use Menue
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
              </span>
            </div>

            <AccordionDash/>
            </CardContent>
          </Card>

        </Grid>

        </Grid>
    </>

  )
}
