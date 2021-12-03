import React from 'react'
import Connexion from './Components/Connexion';
import Inscription from './Components/Inscription';
import Home from './Components/Home';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const useStyles= makeStyles((theme)=>({
  root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/Image.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  }))

function App() {
  const Style=useStyles();
  return (
    <div className={Style.root}>
    <Router>
      <Routes>
        <Route path='/Connexion' element={<Connexion/>}/>
        <Route path='/Inscription' element={<Inscription/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
       
     </Router>
   
   
   
 </div>  
    
  );
}
   

export default App;
