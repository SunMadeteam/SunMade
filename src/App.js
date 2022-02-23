import { Routes, Route } from 'react-router-dom';
import FooterMenu from './common/components/Footer-menu';
import MainPage from './features/Main-page';
import Registration from './features/Registration';
import RegistrationConfirmationCode from './features/Registration-confirmation-code';
import Authorization from './features/Authorization';
import Catalogs from './features/Catalogs';
import Catalog from './features/Catalog';
import Shopping from './features/Shopping';
import CartDescription from './features/Cart-description/index';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/personal' element={<Registration/>} />
        <Route path='confirmation' element={<RegistrationConfirmationCode />} />
        <Route path='/auth' element={<Authorization/>} />
        <Route path='/catalogs' element={<Catalogs />} />
        <Route path='/catalogs/catalogs' element={<Catalog />} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/cart-description' element={<CartDescription />} />
      </Routes>
      <FooterMenu />
      <hr />      
      
    </div>
  );
}

export default App;
