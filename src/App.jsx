import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header/Header";
import Home from "./page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
