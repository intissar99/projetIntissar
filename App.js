import React from 'react'
import Connexion from './Components/Connexion';
import Inscription from './Components/Inscription';
import Home from './Components/Home';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Icones from './Components/Icones';
const useStyles= makeStyles((theme)=>({
  root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/image.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      
    }
  }))

function App() {
  const style=useStyles();
  return (
    <div className={style.root}>
      <span >
       <CssBaseline />
       <Home/>
       <Icones/>
      </span>
    <Router>
      <Routes>
     
        <Route path='/Connexion' element={<Connexion/>}/>
        <Route path='/Inscription' element={<Inscription/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Icones' element={<Icones/>}/>
      </Routes>
       
     </Router>
   
   
   
 </div> 
 
   
  );
}

export default App;
