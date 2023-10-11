// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Home from './pages/Home';
import ProductsPage from './pages/product/ProductsPage';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';

// Import components
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='store/products' element={<ProductsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='support' element={<SupportPage />} />

        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;