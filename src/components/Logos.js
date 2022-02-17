import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Glicologo from '../img/glico.png';
import Helixlogo from '../img/helix.png';
import Productlogo from '../img/product.png';
import Soccerlogo from '../img/soccer.png';

const useStyles = makeStyles({
  logo_space: {
    margin: 30,
  },
});

const IconComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.logo_space}>
        <img src={Glicologo} alt='Glico' height='30' />
        <img src={Helixlogo} alt='Helix' height='40' />
        <img src={Productlogo} alt='Product' height='60' />
        <img src={Soccerlogo} alt='Soccer' height='60' />
      </Box>
    </>
  );
};

export default IconComponent;
