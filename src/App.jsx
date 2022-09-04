import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header/Header";
import Home from "./page/Home/Home";
import ByDay from "./page/ByDay/ByDay";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/day" element={<ByDay />}  />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
