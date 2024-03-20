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
<<<<<<< HEAD
          <Typography>রেজিস্টার </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >3</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>                                                                                        
=======
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
<<<<<<< HEAD
          <Typography>উপনিবন্ধক</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >1</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>   
=======
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
<<<<<<< HEAD
          <Typography>সহকারী রেজিস্টার</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >6</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>   
=======
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
<<<<<<< HEAD
          <Typography>পরীক্ষক</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            কবিতা <span >5</span> , ভ্রমনকাহিনী <span >1</span> , খোদাই <span >4</span>   
=======
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}