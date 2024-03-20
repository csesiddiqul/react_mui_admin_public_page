import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionDash() {
  return (
    <div>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>রেজিস্টার </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >3</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>                                                                                        
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>উপনিবন্ধক</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >1</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>   
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>সহকারী রেজিস্টার</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >6</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>   
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>পরীক্ষক</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >5</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>   
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}