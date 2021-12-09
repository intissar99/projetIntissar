import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Imageicones from './Imageicones';

const useStyles= makeStyles((theme)=>({
  root: {
     Height: '100vh',
    
    }
  }))

function Icones() {
  const style=useStyles();
  return (
    
    <div className={style.root}>
   <Imageicones/>
   
   <h1>hello</h1>
 </div> 
   
  );
}

export default Icones;