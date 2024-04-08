import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import FrontPage from "./Components/FrontPage";
import Show from "./Components/Show";
import NewTransactionForm from "./Components/NewTransactionForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/new" element={<NewTransactionForm />} />
      </Routes>
    </>
  );
};

export default App;
