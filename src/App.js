import { BrowserRouter as Router
  , Route, Switch } from 'react-router-dom';
import TopButton from './component/TopButton/TopButton';
import Home from './component/Home/Home'
import Board from './component/Boards/Boards'
import Footer from './component/Footer/Footer'
import {useEffect,useState} from 'react';
import Apploader from './component/Loader/Loader'
import Society from './component/Societies/Society';
import Contact from './component/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Team from './component/Team/Team';
import Gallery from './component/Gallery/Gallery';

function App() {
  AOS.init();

  const [appLoading, setApploading] = useState(true)
  window.addEventListener('load', function () {
    setApploading(false)
  })
  
  
  // else if (!appLoading) {
  return (
    <>
      {appLoading?<Apploader/>:
      <Router>  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>   
          <TopButton />
          <Switch>
            <Route  path='/' component={Board} />
            {/* <Route   path='/boards'  component={Board} />
            <Route   path='/societies'  component={Society} />
            <Route   path='/contact'  component={Contact} />
            <Route   path='/team'  component={Team}/>
            <Route   path='/gallery'  component={Gallery}/> */}
          </Switch>   
          <Footer/> 
    </Router>
      }
      
    </>
    
  );
  // }
}

export default App;
