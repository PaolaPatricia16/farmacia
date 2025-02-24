import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <>
   
        <ToastContainer />
        <BrowserRouter>
        {/* Navbar e Footer terão posição fixa, por isso estão fora do ROUTES */}
          <Navbar />
          {/* div = para envolver todos os elementos que irão receber uma rota.
          min-h.. = define altura mínima, para não afetar o footer*/}
          <div className="grid  items-center  min-h-screen bg-cyan-600">
            <Routes>
                
                {/* /home = aponta para a tela home */}
                <Route path="/home" element={<Home />} />
     
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
  
      </>
    );
}

export default App

