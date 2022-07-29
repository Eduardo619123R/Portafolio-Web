import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../views/Home/index";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
