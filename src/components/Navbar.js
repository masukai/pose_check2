import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const useStyles = makeStyles({
  share_space: {
    margin: 10,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        color='default'
        position='relative'
        style={{ alignItems: 'center' }}
      >
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h4'>
            <strong>Glico Pose Check</strong>
          </Typography>
        </Box>
        <Box>
          <TwitterShareButton
            className={classes.share_space}
            title={
              'Glico Pose Checkを使ってみた！商品を買ったら試せるよ！ #GlicoPoseCheck #Helix'
            }
            via='GlicoPRJP'
            url={'https://masukai.github.io/pose_check2/'}
          >
            <TwitterIcon size={60} />
          </TwitterShareButton>
          <LineShareButton
            className={classes.share_space}
            url={'https://masukai.github.io/pose_check2/'}
          >
            <LineIcon size={60} />
          </LineShareButton>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='center'>
            ↑こちらのボタンからSNSに結果を投稿↑
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
