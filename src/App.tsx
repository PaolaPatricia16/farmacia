import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ListaCategorias from './components/categorias/listacategroias/ListaCategorias';
import FormCategoria from './components/categorias/formcategorias/FormCategoria';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';

function App() {
    return (
        <>
   
        <ToastContainer />
        <BrowserRouter>
       
          <Navbar />
          <div className="grid  items-center  min-h-screen bg-cyan-600">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categorias" element={<ListaCategorias />} />
                <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
  
      </>
    );
}

export default App

