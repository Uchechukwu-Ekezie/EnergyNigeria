
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-300 h-dvh">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* Uncomment and add these routes as needed */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
