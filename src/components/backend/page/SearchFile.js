import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Card, CardContent, Typography, Grid } from '@mui/material';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import Box from '@mui/material/Box';





export default function SearchFile() {


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
                color="inherit"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
                onClick={(event) => handleClick(event, '/admin')}
              >
                ড্যাসবোর্ড
              </Link>



              <Link
                underline="hover"
                color="text.primary"
                href="#"
                aria-current="page"
                onClick={(event) => handleClick(event, '#')}
              >
                 নথি সন্ধান
              </Link>

            </Breadcrumbs>

        </div>

        <Card  >

            <CardMedia
            
                title="green iguana"
            />
            <CardContent>

         
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                     <FormControl>
            
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="female"  control={<Radio />} label="কপিরাইটের আবেদন" />
                        <FormControlLabel value="male" control={<Radio />} label="চুক্তিপত্রের আবেদন" />

                        </RadioGroup>

                        <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex',  }}
                    >

                    
                    <InputBase
                        sx={{ ml: 1, flex: 1, color:'black' }}
                        placeholder="খুঁজুন"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    
                    
                        </Paper>
                    </FormControl>

                </Grid>

              </Grid>


            </CardContent>
            <CardActions>
            
            </CardActions>



            <Box sx={{m:2}}>

            <Grid container spacing={2}>

              

                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia

                            component="img"
                            sx={{ width: '24%'}}
                            image="https://ipsitahost.com/copyright/img/applicant/1001192.png"
                            alt="Live from space album cover"
                            />

                          <CardContent>
                              <Typography variant="subtitle1" color="text.secondary">
                              আবেদনকারীর নাম : Arun Kumar Roy
                              </Typography>
                              <Typography variant="subtitle1" color="text.secondary">
                              কর্মের শ্রেণি : সাহিত্য কর্ম
                              </Typography>
                          </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                    <CardContent>
                        <Typography variant="h5">কপিরাইটের আবেদন -</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                        নথির অবস্থান : আবেদন গৃহীত জনাব মোঃ আতিকুজ্জামান কপিরাইট পরিদর্শক
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="subtitle1" color="text.secondary">
                        ট্র্যাকিং নম্বর : CRL-202246-00048
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            প্রিন্ট করুন
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary">
                            সংশোধনের জন্য ই-মেইল পাঠান 
                        </Typography>
                        

                        <Typography variant="subtitle1" color="text.secondary">
                         তারিখ : 10/12/24
                        </Typography>

                    </CardContent>
                   
                    </Card>
                </Grid>
                </Grid>
            </Box>

        </Card>


    
    
    
    
    </>

   
  );
}