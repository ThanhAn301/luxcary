import React, { useState } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newspaper from './components/Newspaper';
import News from './components/News';
import { NewsData } from './components/NewsData';
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Navbar toggleModal={setOpenModal} />
      {openModal && <Modal closeModal={setOpenModal} />}
      <Routes>
        <Route path="/news" element={<Newspaper />} />
        {
          NewsData.map((news, index)=>{
            return(
              <Route path={news.path} element={<News news={news}/>} />
            );
          })
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

