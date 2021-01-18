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
    height:160,
    width:980,
    backgroundColor:"grey",

    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    height:100,
    marginTop:"2%",
    marginLeft:"2%"

  },
  content: {
    flex: '1 0 auto',
    margintop : "50%"
  },
  cover: {
    width: "100%",
    height: 110,
    marginTop:"3%",
    marginLeft:"3%"
  
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
  playcard : {
    
    
  },
  player : {
    height : 100,
    width : 1180,
    marginTop : "5%"
  }
}));

export default function MusicControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(music);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.img}
        title={props.title}
        
      />
      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.author}
          </Typography>
          
        </CardContent>
        
      </div>
      <div className={classes.player} >
      <ThemeProvider theme={muiTheme} className={classes.playcard} >
        <AudioPlayer 
        elevation={5}
        variation="default"
        spacing={2}
        download={true}
        autoplay={false}
        order="standart"
        preload="auto"
        loop={true}
        src={props.path}
        className={classes.player}
        width="90%"
        height="80%"
        marginTop="10%"
      />
        </ThemeProvider>
        </div>
      
    </Card>
  );
}
