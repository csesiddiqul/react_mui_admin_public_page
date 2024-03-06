import React, { useState } from 'react'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../../css/Dash.css';
import SourceIcon from '@mui/icons-material/Source';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AccordionDash from '../inc/AccordionDash';
import BarChart from '../../charts/Barchat';

export default function Admin() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
      <>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ height: '30vh', width: '100%' }} className='gradient'>
                <CardContent>
                  <div className='iconStyle'> 
                    <DriveFolderUploadIcon/>
                  </div>

                  <Typography gutterBottom variant="h5" component="div"  sx={{color:'#ffffff'}}>
                    200,12
                  </Typography>
                  <Typography variant="body2" component="div" sx={{color:'#ccd1e1'}} color="text.secondary">
                      This Month File
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card sx={{ height: '30vh', width: '100%' }} className='gradientlight'>
                  <CardContent>
                    <div className='iconStyle'>
                      <FolderOpenIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div"  sx={{color:'#ffffff'}}>
                      300,123
                    </Typography>
                    <Typography variant="body2" component="div" sx={{color:'#ccd1e1'}} color="text.secondary">
                        Total File
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card sx={{ height: '14vh', width: '100%' }} className='gradientlight'>
              <CardContent>
                <Stack direction='row' spacing={2}>

                    <div className='iconStyle'>
                      <SourceIcon/>
                    </div>

                    <div className='paddingAll'>
                      <span className='fileTitle'>
                        203
                      </span>
                    <br/>
                      <span className='fileSubTitle' >
                        Total File
                      </span>
                    </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card sx={{ height: '14vh', width: '100%'}}>
              <CardContent>
                  <Stack direction='row' spacing={2}>

                      <div className='iconStyleblack'>
                        <SourceIcon/>
                      </div>

                      <div className='paddingAll'>
                        <span className='fileTitle'>
                          2003
                        </span>
                      <br/>
                        <span className='fileSubTitle'>
                          File
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

            <Card sx={{ height: '50vh', width: '100%', padding:'30px 0px  10px 20px'}}>
              <BarChart />
            </Card>

          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '60vh', width: '100%' }}>
            <CardContent>
            <div className='paddingAll'>
              <span className='fileTitle'>
              Most Use Menue
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
