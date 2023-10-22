import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState , useEffect } from 'react';
import { fetchDataFromAPI } from './apiRes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Men } from './Views/Men/Men';
import { Women } from './Views/Women/Women';
import { Oferts } from './Views/Oferts/Oferts'
import { Home } from './Views/Home/Home';
import { EachProdView } from './Views/EachProdView/EachProdView';
import { Cart } from './Views/Cart/Cart';

const Index = () => {
 
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetchDataFromAPI()
      .then((data) => {
        setDataApi(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // CART
  const [cart , setCart] = useState([])

  const addToCart = (prod) => {
    const updatedCart = [...cart, prod];
    setCart(updatedCart);
  }

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home dataApi={fetchDataFromAPI} cart={cart} setCart={setCart} /> } />
      <Route path="/Ofertas" element={<Oferts dataApi={fetchDataFromAPI} cart={cart} setCart={setCart}/> } />
      <Route path="/Hombre" element={<Men dataApi={fetchDataFromAPI} cart={cart} setCart={setCart}/> } />
      <Route path="/Mujer" element={<Women dataApi={fetchDataFromAPI} cart={cart} setCart={setCart}/> } />
      <Route path="/Carrito" element={<Cart cart={cart} setCart={setCart}></Cart>} />
      {dataApi.map((prod) => (
          <Route key={prod.id} path={`/producto/${prod.id}/${prod.nombre}`} element={<EachProdView prod={prod} addToCart={addToCart} cart={cart} setCart={setCart}></EachProdView>} />
        ))}
    </Routes>
  </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index></Index>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
