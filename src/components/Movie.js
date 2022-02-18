import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import Soccermovie from '../mov/example_pose.mov';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PlayGrond: Soccermovie,
    };
  }

  render() {
    const { PlayGrond } = this.state;
    return (
      <div>
        <Box>
          <Typography variant='body1' align='center'>
            <br />
            <strong>
              日本サッカー代表・OO選手の
              <br />
              シュート動画!(0.5倍速)
            </strong>
            <br />
            このように骨格推定で姿勢を確認できるよ!
            <br />　
          </Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          sx={{
            background: 'linear-gradient(60deg, #EA3423 40%, #FF8E53 80%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
          }}
        >
          <ReactPlayer
            url={PlayGrond}
            id='Example'
            playing
            loop
            controls
            muted
            playbackRate='0.5'
            width='450px'
            playsinline
          />
        </Box>
        <Box>
          <Typography variant='body1' align='center'>
            <br />
            撮った動画をアップロードする場合は
            <strong style={{ color: 'orange' }}>左のボタン</strong>
            <br />
            スマホやパソコンのカメラで見る場合は
            <strong style={{ color: 'red' }}>右のボタン</strong>
            <br />
            押した先のサイト(Google)へGO!
            <br />　
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Stack direction='row' spacing={5}>
            <Button
              component={Link}
              href='https://storage.googleapis.com/tfjs-models/demos/pose-detection-upload-video/index.html?model=movenet'
              target='_blank'
              variant='contained'
              color='warning'
              size='large'
            >
              Upload
            </Button>
            <Button
              component={Link}
              href='https://storage.googleapis.com/tfjs-models/demos/pose-detection/index.html?model=blazepose'
              target='_blank'
              variant='contained'
              color='error'
              size='large'
            >
              Live
            </Button>
          </Stack>
        </Box>
        <Box>
          <Typography variant='body1' align='center'>
            <br />
            <small style={{ color: 'red' }}>
              *動作が非常に重たくなるので，zoom中はボタンを押さないようにしてください
            </small>
            <small>
              <br />
              *アップロードは現在のところパソコンでのみ動作します
              <br />
              (スマホでも動くように改良中)
              <br />
              *ライブはスマホでも動作します
            </small>
            <br />　
          </Typography>
        </Box>
      </div>
    );
  }
}
