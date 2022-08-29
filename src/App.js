import './App.scss';
import BottomSection from './Components/BottomSection/BottomSection';
import Brands from './Components/Brands/Brands';
import Flyer from './Components/Flyers/Flyer';
import Footer from './Components/Footer/Footer';
import Menubar from './Components/Header/Menubar/Menubar';
import TopHeader from './Components/Header/TopHeader/TopHeader';
import MiddleHeader from './Components/MiddleSection/MiddleHeader';
import Product from './Components/Products/Product';
import Sliders from './Components/Sliders/Sliders';
function App() {
  return (
    <>
     <TopHeader/>
     <MiddleHeader/>
     <Menubar/>
    <Sliders/>
    <Flyer/>
    <Product/>
    <Brands/>
    <BottomSection/>
    <Footer/>
  
    </>
  );
}

export default App;
