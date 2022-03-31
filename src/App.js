import { Routes, Route } from 'react-router-dom';
import FooterMenu from './common/components/Footer-menu';
import MainPage from './features/Main-page';
import Registration from './features/Registration';
import RegistrationConfirmationCode from './features/Registration-confirmation-code';
import Authorization from './features/Authorization';
import Shopping from './features/Shopping';
import Catalog from './features/Catalog/index';
import Catalogs from './features/Catalogs/index';
import About from './features/About';
import CartDescription from './features/Cart-description/index';
import  Ordering  from './features/Ordering/Ordering';
import PersonalArea from './features/Personal-area';
import SelectDateTime from './features/Select-date-time/SelectDateTime';
import { useAuth } from './useAuth';


function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/personal' element={<Registration/>} />
        <Route path='confirmation' element={<RegistrationConfirmationCode />} />
        <Route path='/auth' element={<Authorization/>} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/catalogs' element={<Catalogs />} />
        <Route path='/catalog/:id' element={<Catalog />} />
        <Route path='/cartDescription/:flowersName' element={<CartDescription />} />
        <Route path='/about' element={<About />} />
        <Route path='/ordering' element={<Ordering />} />
        <Route path='/personal-area' element={<PersonalArea />} />
        <Route path='/selectDate' element={<SelectDateTime />} />
      </Routes>
      <FooterMenu />
      <hr />      
    </div>
  );
}

export default App;
