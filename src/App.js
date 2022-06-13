import { useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newspaper from "./components/Newspaper";
import News from "./components/News";
import { NewsData } from "./components/NewsData";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Navbar toggleModal={setOpenModal} />
      {openModal && <Modal closeModal={setOpenModal} />}
      <div style={{ backgroundColor: "#fffcf7" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/news" element={<Newspaper />} />
          <Route path="/contact" element={<Contact />} />

          {NewsData.map((news, _) => {
            return <Route path={news.path} element={<News news={news} />} />;
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
