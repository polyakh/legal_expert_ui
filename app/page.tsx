"use client"
import {
  AccordionDetails,
  
  Button, Grid, Typography, Container, Box, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './page.module.css'




export default function Home() {
  return (
    <main>
 
    <Container maxWidth="lg">
    <Grid container className={styles.sectionTop}>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" component='h2' gutterBottom>
          LegalExpert
        </Typography>
        <Typography variant="h6" component='h2' gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eveniet corrupti consectetur veniam, nam molestiae?
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda dolorem sequi quae rem nulla?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda dolorem sequi quae rem nulla?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus dolorem esse vero sunt perspiciatis tempore maiores aliquid recusandae quam.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src='/next.svg' alt="Section Image" className={styles.image} />
      </Grid>
    </Grid>
       
    </Container>
    <Box sx={{ my: 6 }}>
    <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align='center' className={styles.title}>
              Welcome to My Site
            </Typography>
            <Typography variant="subtitle1" align='center' className={styles.subtitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi exercitationem, soluta fugiat voluptate ratione explicabo sunt fugit alias? Tempora magni facere pariatur, cupiditate laborum, ad odio, repudiandae dolore quasi libero mollitia cum aliquam aspernatur.
            </Typography>
            <Button variant="contained" color="primary" className={styles.button}>
              Call me
            </Button>
          </Grid>
        </Grid>
    </Container>
    </Box>
   
    <Box sx={{ my: 6 }}>
    <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align='center' className={styles.title}>
            Frequently asked questions
            </Typography>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
          </Grid>
        </Grid>
    </Container>
    </Box>

    </main>
  )
}
