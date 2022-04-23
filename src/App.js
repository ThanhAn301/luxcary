import React,{useState} from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Contact from './components/Contact';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Navbar toggleModal={setOpenModal}/>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;

