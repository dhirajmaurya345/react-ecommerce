import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';


import Pricing from './components/Pricing'
import StoreNavigation from './components/StoreNavigation'


function App() {
 return (
          <BrowserRouter>
          <StoreNavigation>
            <Routes>
          
            <Route path='/Pricing' key={1} element={<Pricing/>}/>
           
          
  
            </Routes>
            
            </StoreNavigation>
            
          </BrowserRouter>    
  );
}

export default App
