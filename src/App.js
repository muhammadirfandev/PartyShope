
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { ProductsApi } from './Components/Products/Products';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProductsApi/>
      </>
  );
}

export default App;
