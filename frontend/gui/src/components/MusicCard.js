import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import codered from './musicthumbnails/rock/codered.jpg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import music from '../Music/rock/AC_DC - Code Red (Official Audio).mp3';

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:220,
    width:550,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 251,
    height: 200,
    marginTop:"2%"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MusicControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Code Red
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            AC/DC
          </Typography>
        </CardContent>
        <ThemeProvider theme={muiTheme}>
        <AudioPlayer 
        elevation={1}
    width="100%"
    variation="default"
    spacing={6}
    download={true}
    autoplay={true}
    order="standart"
    preload="auto"
    loop={true}
     src={music} />
        </ThemeProvider>;
      </div>
      <CardMedia
        className={classes.cover}
        image={codered}
        title="AC DC code red"
      />
    </Card>
  );
}
