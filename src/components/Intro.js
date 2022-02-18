import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstaIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Avatar from '@mui/material/Avatar';
import QRcode from '../img/QR2.png';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(60deg, #EA3423 40%, #FF8E53 80%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    margin: 10,
  },
});

const Intro = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        color='default'
        position='relative'
        style={{ alignItems: 'center' }}
      >
        <Box>
          <Typography variant='body1' align='center'>
            GlicoのHP・SNSはこちら
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Link href='https://www.glico.com/jp/' target='_blank'>
            <Avatar className={classes.root}>
              <HomeIcon />
            </Avatar>
          </Link>
          <Link href='https://twitter.com/GlicoPRJP' target='_blank'>
            <Avatar className={classes.root}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link href='https://www.instagram.com/glico_direct/' target='_blank'>
            <Avatar className={classes.root}>
              <InstaIcon />
            </Avatar>
          </Link>
          <Link href='https://www.facebook.com/GlicoGlobal/' target='_blank'>
            <Avatar className={classes.root}>
              <FacebookIcon />
            </Avatar>
          </Link>
          <Link href='https://www.youtube.com/user/glicowebnet' target='_blank'>
            <Avatar className={classes.root}>
              <YouTubeIcon />
            </Avatar>
          </Link>
        </Box>
        <Box>
          <Typography variant='body1' align='center'>
            このサイトのQRコードはこちら
            <br />
            (購入レシートがいるよ)
          </Typography>
        </Box>
        <Box>
          <img src={QRcode} alt='QRcode' height='100' />
        </Box>
      </AppBar>
    </>
  );
};

export default Intro;
