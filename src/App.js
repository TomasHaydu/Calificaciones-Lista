import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Edit from "./pages/Edit"
import Add from "./pages/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="edit/:id" element={<Edit/>} />
          <Route path="add" element={<Add/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
