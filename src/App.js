import React,{useState} from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Navbar toggleModal={setOpenModal}/>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <Footer />
    </div>
  );
}

export default App;

