import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './OminusBeat.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './tileData';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import divider from './images/divider2.png';
import stripbg from './images/stripbg';
import Typography from '@material-ui/core/Typography';
import titleimg from './images/title.png';
import * as $ from "jquery";
import Player from "./Player";
import Component from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    opacity:"100%",
    backgroundColor:'grey',
  },
  tabs_style: {
      textColor:"white",
      color:"white",
      fontSize:130
      
  },
  tab_style: {
      textColor:'grey'
  },

  gridList: {
    width: 600,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  text: {
      color:"white"
  },
  paperContainer: {
        backgroundImage: `url(${stripbg})`,
        backgroundSize:'cover',
        height:650
        
        
        
},
grids : {
   width: 600,
    height: 450, 
}

}));


export default function DisabledTabs() {
    const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const primary = grey[50];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Grid container spacing = {10} align="center" >
        <Grid item xs = {12}  >
    
      <Tabs 
        value={value}
        onChange={handleChange}
        className={classes.tabs_style}
        style={{marginLeft:"37%"}}
        
      >
        <Tab label="Home"  />
        <Tab label="Music Alchemy" />
        <Tab label="About US" />
      </Tabs>
    
    </Grid>
    <Grid item xs={12} className={classes.paperContainer}   >

        
        
            
            <img src={titleimg} alt={"tile"} style={{marginTop:"10%"}} />
        
        
    </Grid>
    <Grid item xs = {12}   >
        <img src={divider} alt="divider" style={{height:"90px", width:"400px"}} />
    </Grid>
    <Grid item xs = {12}   >
        
            <Typography className={classes.text} variant = "h4" component="h4" textColor="white" fontfamily="Monospace" >
                Explore
            </Typography>
        
    </Grid>
    <Grid item xs = {6} style={{marginLeft:"25%"}} >
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} spacing={0} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} style={{padding:"30px"}} >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Grid>
    <Grid item>
      
    </Grid>
    
      
      

    </Grid>
    
  );
}