import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import PostWritePage from "./component/PostWritePage";
import PostDetail from "./component/PostDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>BIBLELOG</h1>
        <Routes>
          <Route index element={ <MainPage /> } />
          <Route path="postwrite" element={ <PostWritePage /> } />
          <Route path="/detail/:id" element={ <PostDetail />}/>
          <Route path="/delete/:id" element={ <MainPage />}/>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
