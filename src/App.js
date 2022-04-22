import React,{useState} from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Navbar toggleModal={setOpenModal}/>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <LogIn />
      <Footer />
    </div>
  );
}

export default App;

