// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Home from './pages/Home';
import ProductsMenu from './pages/product/ProductsMenu';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import AddProduct from './pages/product/AddProduct';
import ProductDetails from './pages/product/ProductDetails';

// AUTH PAGES
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/auth/Dashboard';

// Import components
import Layout from './components/layout/Layout';
import AuthPrivateRoutes from './components/layout/AuthPrivateRoutes';

function App(params) {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* AUTH PAGES */}
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />

        {/* Private Auth Routes */}
        <Route element={<AuthPrivateRoutes/>}>
          <Route path='dashboard' element={<Dashboard/>} />
        </Route>

        {/* PRODUCTS ROUTES */}
        <Route path="store">
          <Route path='products' element={<ProductsMenu />} />
          <Route path="product/add" element={<AddProduct/>}/>
          <Route path="product/:id" element={<ProductDetails/>} />

        </Route>

        {/* OTHER PAGES */}
        <Route path='about' element={<AboutPage />} />
        <Route path='support' element={<SupportPage />} />

        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;