import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop:10,
    backgroundColor:'grey'
  },
  tabs : {
    color:'white'
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
       
        <Tab to='/' component={Link} label="Home" className={classes.tabs} />
        <Tab to='/explore' component={Link} label="Explore" className={classes.tabs} />
        <Tab label="Account" className={classes.tabs} />
        <Tab label="About US" className={classes.tabs} />
        
      </Tabs>
    </Paper>
  );
}