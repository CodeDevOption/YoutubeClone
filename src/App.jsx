import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ChannelDetail,
  Feed,
  Footer,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <div className="max-h-screen overflow-y-hidden bg-[#000000fd]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed selectedCategory= {selectedCategory} setSelectedCategory = {setSelectedCategory} />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
