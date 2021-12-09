import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { AppBar, IconButton, Toolbar,Collapse} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';
const useStyles= makeStyles((theme)=>({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
      appbar: {
        background: 'none',
      },
      appbarWrapper: {
        width: '80%',
        margin: '0 auto',
      },
      appbarTitle: {
        flexGrow: '1',
      },
      colorText: {
        color: '#fff' ,
      },
      container: {
        textAlign: 'center',
      },
      title: {
        color: '#66b0ab',
        fontSize: '4.5rem',
      },
      icon: {
        color: '#fff',
        fontSize: '2rem',
      },
      goDown: {
        color: '#fff',
        fontSize: '4rem',
      },
}));
function Home() {
  const style=useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
    return (
      <div className={style.root}>
       <CssBaseline />
       <AppBar className={style.appbar} elevation={0}>
        <Toolbar className={style.appbarWrapper}>
          <h1 className={style.appbarTitle}>
            My<span className={style.colorText}>Formation.</span>
          </h1>
          <IconButton>
            <SortIcon className={style.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={style.container}>
          <h1 className={style.title}>
            Welcome to <br />
            MyFormation.
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={style.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
       
      </div>
     
        
      
    );
  }
     
  
  export default Home;