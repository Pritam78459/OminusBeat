import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import musicdetails from '../Music/rock/Musicdetails';
import MusicCard from './MusicCard';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
    
  },
  gridList: {
    width: 1100,
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={1} >
        <GridListTile key="Subheader" cols={2} style={{ height: '100%' }}>
          
        </GridListTile>
        {musicdetails.map((tile) => (
          <GridListTile key={tile.title}>
            
            <MusicCard title={tile.title} author = {tile.author} path = {tile.path} img = {tile.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
